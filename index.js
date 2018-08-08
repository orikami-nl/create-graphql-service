const { send } = require("micro");
const url = require("url")

module.exports = ({ schema, apolloServer, name, version }) => {
  if(!version) version = process.env.NODE_ENV === "production" ? "v1" : "dev";
  const { microGraphiql, microGraphql } = apolloServer;
  console.log(`Graphql service at /${version}/${name}/graphql`);

  return (req,res) => {
    const { pathname } = url.parse(req.url);
    const parts = pathname.split("/")
    const cmd = parts[parts.length-1];
    switch(cmd){
      case "graphiql":  return microGraphiql({ endpointURL: `/${version}/${name}/graphql` })(req,res);
      default:          return microGraphql({ schema, context: { user: req.user || null } })(req,res);



    }
  }

}

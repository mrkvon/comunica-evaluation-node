import {
  QueryEngine,
  // QueryEngineFactory,
} from '@comunica/query-sparql-link-traversal'
;(async () => {
  /*
  console.log('Hello World')
  const myEngine = await new QueryEngineFactory().create({
    configPath:
      'https://raw.githubusercontent.com/comunica/comunica-feature-link-traversal/master/engines/query-sparql-link-traversal/config/config-default.json',
    //      './node_modules/@comunica/query-sparql-link-traversal/config/config-default.json',
  })

  // */ const myEngine = new QueryEngine()

  const bindingsStream = await myEngine.queryBindings(
    `
        PREFIX foaf: <http://xmlns.com/foaf/0.1/>
        PREFIX mypod: <https://mrkvon.solidcommunity.net/profile/card#>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        SELECT DISTINCT ?interest ?label
        WHERE {
          mypod:me foaf:topic_interest ?interest.
          ?interest rdfs:label ?label.
          FILTER(lang(?label)='en')
        }
        `,
    {
      sources: ['https://mrkvon.solidcommunity.net/profile/card'],
      lenient: true,
    },
  )

  // Consume results as a stream (best performance)
  bindingsStream.on('data', binding => {
    console.log('************************')
    console.log(binding.toString()) // Quick way to print bindings for testing
  })
  bindingsStream.on('end', () => {
    console.log('finished .........................')
    // The data-listener will not be called anymore once we get here.
  })
  bindingsStream.on('error', error => {
    console.error(error)
  })
})()

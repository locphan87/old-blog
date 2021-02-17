const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './src/blog.db',
  },
  useNullAsDefault: true,
})

const fieldName = 'sqlite'
const initData = ({
  createNode,
  createNodeId,
  createContentDigest,
  dataTypes,
}) => {
  const processQueryRow = (typeName, queryRow, rowIndex) => {
    const nodeId = queryRow.id ? queryRow.id : rowIndex
    const nodeData = Object.assign({}, queryRow, {
      id: createNodeId(`gatsby-sql-type-${fieldName}-${typeName}-${nodeId}`),
      parent: null,
      children: [],
      internal: {
        type: typeName,
        contentDigest: createContentDigest(queryRow),
        ignoreType: true,
      },
    })

    return nodeData
  }
  const createMainNode = (typeName) => {
    const fieldNodeId = createNodeId(`gatsby-sql-field-${fieldName}`)
    createNode({
      id: fieldNodeId,
      typeName: typeName,
      fieldName,
      parent: null,
      children: [],
      internal: {
        type: `SQLSource`,
        contentDigest: createContentDigest({ fieldName, typeName }),
        ignoreType: true,
      },
    })
  }
  try {
    dataTypes.forEach(async (x) => {
      const { queryChain, typeName } = x
      createMainNode(typeName)
      const data = await queryChain(knex)

      data.forEach((row, rowIndex) => {
        const nodeData = processQueryRow(typeName, row, rowIndex)
        createNode(nodeData)
      })
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = initData

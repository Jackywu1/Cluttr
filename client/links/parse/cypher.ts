/* eslint-disable indent */
import { Query, node, relation } from 'cypher-query-builder';

// iterate through normalized data
  // for each type
    // if property exists as a type in node
      // continue
    // else
      // add property to node

// iterate through normalized data
  // for each type
    // if property exists as a type in node
      // create relation based on id

export default (_data: any): void => {
  console.log('the data:', _data);
  Object.entries(_data).forEach((entity) => {
    const [type, nodes] = entity;

    Object.entries(nodes as any).forEach((currentNode) => {
      const [id, properties] = currentNode;

      Object.keys(properties as any).forEach((property) => {
        if (!_data[property]) {
          const query = new Query()
            .createNode(id, type, properties as any)
            .build();

          console.log('query:', query);
        }
      });

      // const query = new Query()
      //   .create([
      //     node(id, type, properties),
      //     relation('out', '', 'RelatesTo'),
      //     node(),
      //   ]);
    });

  //   Object.entries(nodes).forEach((currentNode) => {
  //     const [id, properties] = currentNode;

  //     if (_data[type]) {
  //       const query = new Query()
  //       .create([
  //         node(id, type, properties),
  //         relation('out', '', 'RelatesTo'),
  //         node(),
  //       ])
  //       .toString();

  //       console.log('relation:', query);
  //     }
  //   });
  });

  console.log('end');
};

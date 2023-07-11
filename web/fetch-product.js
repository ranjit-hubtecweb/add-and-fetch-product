import shopify from "./shopify.js";


// const  FETCH_PRODUCTS_QUERY = `{
//     products(first:10){
//         edges{
//             node {
//                 id
//                 title
//             }
//         }
//     }
// }`
const FETCH_PRODUCTS_QUERY = `{
  products(first: 10) {
    edges {
      node {
        id
        title
      }
    }
  }
}`;
export default async function fetchProducts(session) {
  const client = new shopify.api.clients.Graphql({ session });
  try {
    const res = await client.query({
      data: {
        query: FETCH_PRODUCTS_QUERY,
      },
    });

    return res;
  } catch (error) {
    console.log(error);
  }
}

// export default async function fetchProducts(
//     session,
//   ) {
//     const client = new shopify.api.clients.Graphql({ session });
//   try {
//    const res = await client.query( { data :{
//     query: FETCH_PRODUCTS_QUERY    
//     }})

//     return res
//   } catch (error) {
//     console.log(error)
//   }
   
//   }
  
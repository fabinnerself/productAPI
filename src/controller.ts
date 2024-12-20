import { Request, Response  } from "express";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number; 
  }
  
  const products: Product[] = [{
    "id":2,
    "name":"Xiomi a 10",
    "description":"celu descrip",
    "price":13.01
 },
 {
    "id":3,
    "name":"Product 03",
    "description":"description for Product 3",
    "price":39.990000
 },
 {
    "id":4,
    "name":"Product 4",
    "description":"Description for Product 4",
    "price":49.9900
 },
 {
    "id":5,
    "name":"Product 5",
    "description":"Description for Product 5",
    "price":59.990000
 },
 {
    "id":6,
    "name":"Product 6",
    "description":"Description for Product 6",
    "price":69.990000
 },
 {
    "id":7,
    "name":"Product 7",
    "description":"Description for Product 7",
    "price":79.990000 },
 {
    "id":8,
    "name":"Product 8",
    "description":"Description for Product 8",
    "price":89.990000
 },
 {
    "id":9,
    "name":"Product 9",
    "description":"Description for Product 9",
    "price":99.990000
 },
 {
    "id":10,
    "name":"Product 10",
    "description":"Description for Product 10",
    "price":109.990000
 },
 {
    "id":12,
    "name":"aa",
    "description":"desc",
    "price":1.000000
 },
 {
   "id":2,
   "name":"Xiomi a 10",
   "description":"celu descrip",
   "price":13.010000
},
{
   "id":3,
   "name":"Product 03",
   "description":"description for Product 3",
   "price":39.990000
},
{
   "id":4,
   "name":"Product 4",
   "description":"Description for Product 4",
   "price":49.990000
},
{
   "id":5,
   "name":"Product 5",
   "description":"Description for Product 5",
   "price":59.990000
},
{
   "id":6,
   "name":"Product 6",
   "description":"Description for Product 6",
   "price":69.990000
},
{
   "id":7,
   "name":"Product 7",
   "description":"Description for Product 7",
   "price":79.990000
},
{
   "id":8,
   "name":"Product 8",
   "description":"Description for Product 8",
   "price":89.990000
},
{
   "id":9,
   "name":"Product 9",
   "description":"Description for Product 9",
   "price":99.990000
},
{
   "id":10,
   "name":"Product 10",
   "description":"Description for Product 10",
   "price":109.990000
},
{
   "id":12,
   "name":"aa",
   "description":"desc",
   "price":1.000000
},
{
 "id":2,
 "name":"Xiomi a 10",
 "description":"celu descrip",
 "price":13.010000
},
{
 "id":3,
 "name":"Product 03",
 "description":"description for Product 3",
 "price":39.990000
},
{
 "id":4,
 "name":"Product 4",
 "description":"Description for Product 4",
 "price":49.990000
},
{
 "id":5,
 "name":"Product 5",
 "description":"Description for Product 5",
 "price":59.990000
},
{
 "id":6,
 "name":"Product 6",
 "description":"Description for Product 6",
 "price":69.990000
},
{
 "id":7,
 "name":"Product 7",
 "description":"Description for Product 7",
 "price":79.990000
},
{
 "id":8,
 "name":"Product 8",
 "description":"Description for Product 8",
 "price":89.990000
},
{
 "id":9,
 "name":"Product 9",
 "description":"Description for Product 9",
 "price":99.990000
},
{
 "id":10,
 "name":"Product 10",
 "description":"Description for Product 10",
 "price":109.990000
},
{
 "id":12,
 "name":"aa",
 "description":"desc",
 "price":1.000000
}];
  let ProdId = products.length ;

  export const getAllProducts = (req: Request, res: Response) => {
    return res.status(200).json({
        products:products
    });
  };  


export const createProd = (req: Request, res: Response) => {
    const {name, description, price} = req.body;

    if(!name || name.length === 0) {
        return res.status(422).json({            
            message: "Name is required"
        });
    }

    if(!description || description.length === 0) {
        return res.status(422).json({            
            message: "Description is required"
        });
    }

    if(!price ) {
        return res.status(422).json({            
            message: "Price  is required"
        });
    }

    const newProd: Product = {
        id: ProdId++,
        name,
        description,
        price 
    }

    products.push(newProd);

    return res.status(201).json({
        message: "Product created susccessfully",
        products: newProd
    });
};

export const deleteProd = (req: Request, res: Response) => {
      const { id } = req.params;
      const prodId = +id;
      
      if(isNaN(prodId)){
         return res.status(400).json({
               message: "Invalid id"
         })
      }

      const prod = products.find((t) => t.id === prodId);
   
      if(!prod){
         return res.status(404).json({
               message: `Product not found with id: ${prodId}`
         });
      }
   
      products.splice(prodId, 1);
   
      return res.status(200).json({
         message: `Product with id: ${prodId} deleted successfully`
      });
}

export const get1Prod = (req: Request, res: Response) => {
      const { id } = req.params;
      const prodId = +id;

      if(isNaN(prodId)){
         return res.status(400).json({
               message: "Invalid id"
         })
      }

      const prod = products.find((t) => t.id === prodId);
   
      if(!prod){
         return res.status(404).json({
               message: `Product not found with id: ${prodId}`
         });
      }
   
      return res.status(200).json({
         product: prod
      });
}

export const modProd = (req: Request, res: Response) => {
   const { id } = req.params;
   const prodId = +id;

   if(isNaN(prodId)){
      return res.status(400).json({
            message: "Invalid id"
      })
   }

   const prod = products.find((t) => t.id === prodId);   
   if(!prod){
      return res.status(404).json({
            message: `Product not found with id: ${prodId}`
      });
   }
   const {name, description, price} = req.body;

   if(!name || name.length === 0) {
       return res.status(422).json({            
           message: "Name is required"
       });
   }

   if(!description || description.length === 0) {
       return res.status(422).json({            
           message: "Description is required"
       });
   }

   if(!price ) {
       return res.status(422).json({            
           message: "Price  is required"
       });
   }

   prod.name = name;
   prod.description = description;
   prod.price = price;

   return res.status(200).json({
      message: `Product with id: ${prodId} modified successfully`,
      product: prod
   });

}
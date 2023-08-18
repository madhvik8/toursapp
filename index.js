// const express = require(`express`);
// const fs = require(`fs`);
// const app =express();

// app.use(express.json());
// const tours = 
// JSON.parse(fs.readFileSync(`${__dirname}/devdata/data/tours-simple.json`));

// app.get(`/api/v1/tours`,(req,res) =>{
//     res.status(200).json({status: `success`,data:{tours} });
// });

// app.get(`/api/v1/tours/:id`,(req,res) =>{
//     console.log(req.params);
//     const id = req.params.id * 1;
//     const tour = tours.find(el => el.id === id);
//     res.status(200).json({
//     status: `success`,
//     data:{
//     tour
//     }
//     });
//     });


// app.post(`/api/v1/tours`,(req,res) =>{
//     const newId = tours[tours.length-1].id+1;
//     const newTour = Object.assign({id: newId},req.body);
//     tours.push(newTour);
//     fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     err=>{
//         res.status(201).json({
//             status:`success`,
//             data:{
//                 tour: newTour
//             }
//         })
//     })
// })
// app.patch('/api/v1/tours/:id', (req, res) => {
//     const tourId = req.params.id * 1; // Convert ID to number
  
//     if (tourId > tours.length-1) {
//       return res.status(404).json({
//         status: 'fail',
//         message: 'Invalid ID'
//       });
//     }
  
//     const updatedTour = { ...tours[tourId ], ...req.body };
//     tours[tourId] = updatedTour;
  
//     fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
//       if (err) {
//         return res.status(500).json({
//           status: 'error',
//           message: 'Failed to update tour data'
//         });
//       }
  
//       res.status(200).json({
//         status: 'success',
//         data: {
//           tour: updatedTour
//         }
//       });
//     });
//   });


//     app.delete(`/api/v1/tours/:id`,(req,res) =>{
//         if(req.params.id*1 > tours.length){
//         return res.status(404).json({
//         status: `fail`,
//         message:`The Tour ID doesn't exists ...`
//         });
//         }
//         res.status(204).json({
//         status:`success`,
//         data:null
//         });
//         });
        

// const port=3000;
// app.listen(port, ()=>{
//     console.log(`thiswill run at port ${port}`);
// });




// NEW_API


const express = require(`express`);
const fs = require(`fs`);
const app = express();
app.use(express.json()); //middleware
const tours = JSON.parse
(fs.readFileSync(`${__dirname}/devdata/data/tours-simple.json`));
app.get(`/api/v1/tours`,(req,res) =>{
res.status(200).json({status:
`success`,results:tours.length,data:tours });
});

app.patch('/api/v1/tours/:id', (req, res) => {
    const tourId = req.params.id * 1; // Convert ID to number
  
    if (tourId > tours.length-1) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID'
      });
    }
  
    const updatedTour = { ...tours[tourId ], ...req.body };
    tours[tourId] = updatedTour;
  
    // Write updated tours data to JSON file
    fs.writeFile(`${__dirname}/devdata/data/tours-simple.json`, JSON.stringify(tours), err => {
      if (err) {
        return res.status(500).json({
          status: 'error',
          message: 'Failed to update tour data'
        });
      }
  
      res.status(200).json({
        status: 'success',
        data: {
          tour: updatedTour
        }
      });
    });
  });


app.post(`/api/v1/tours`,(req,res) =>{
const newId = tours[tours.length-1].id+1;
const newTour = Object.assign({id: newId},req.body);
tours.push(newTour);
fs.writeFile(
`${__dirname}/devdata/data/tours-simple.json`,
JSON.stringify(tours),
err=>{
res.status(201).json({
status:`success`,
data:{
tour:newTour
}
});
});
});
const port=3000;
app.listen(port,()=>{
console.log(`this will run at port ${port}` );
});
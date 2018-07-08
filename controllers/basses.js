const express = require('express');
const router = express.Router();
const Bass = require('../models/basses.js');

// router.get('/seed', (req, res)=>{
//   Bass.create(
//     [
//       {
//         brand:'gibson'
//         strings:4,
//         wood:'maple',
//         fretboard:'ebony'
//         readyToBuild:true
//       },
//       {
//         brand:'fender'
//         strings:4,
//         wood:'alder',
//         fretboard:'rosewood'
//         readyToBuild:true
//       },
//       {
//         brand:'gibson'
//         strings:5,
//         wood:'maple',
//         fretboard:'rosewood'
//         readyToBuild:true
//       },
//       {
//         brand:'gibson'
//         strings:6,
//         wood:'koa',
//         fretboard:'ebony'
//         readyToBuild:false
//       },
//       {
//         brand:'fender'
//         strings:4,
//         wood:'maple',
//         fretboard:'ebony'
//         readyToBuild:false
//       },
//       {
//         brand:'fender'
//         strings:4,
//         wood:'mahogany',
//         fretboard:'ebony'
//         readyToBuild:false
//       }
//     ],
//     (err, data)=>{
//         res.redirect('/basses');
//     }
//   )
// });

// json Route
// router.get('/json', (req, res)=>{
//   Bass.find( (err, basses)=>{
//     res.send(basses);
//   });
// });

router.delete('/:id', (req, res)=>{
  Bass.findByIdAndRemove(req.params.id, (err, deletedBass)=>{
    res.redirect('/basses');
  })
});

router.get('/:id/edit', (req, res)=>{
  Bass.findById(req.params.id, (err, foundBass)=>{
    res.render(
      'basses/edit.ejs',
      {
        bass:foundBass
      }
    );
  })
});

router.put('/:id', (req, res)=>{
  if(req.body.readyToBuild === 'on'){
    req.body.readyToBuild = true;
  } else {
    req.body.readyToBuild = false;
  }
  Bass.findByIdAndUpdate(req.params.id, req.body, {new:true},
  (err, updatedModel)=>{
    res.redirect('/basses');
  });
});

router.get('/new', (req,res)=>{
  res.render('basses/new.ejs');
});

router.get('/', (req, res)=>{
  Bass.find({}, (err, allBasses)=>{
    res.render('basses/index.ejs', {
      basses: allBasses
    });
  });
});

router.get('/:id', (req, res)=>{
  Bass.findById(req.params.id, (err, foundBass)=>{
    res.render('basses/show.ejs', {
      bass:foundBass
    });
  })
});

router.post('/', (req, res)=>{
  if(req.body.readyToBuild === 'on'){
     req.body.readyToBuild = true;
  } else {
     req.body.readyToBuild = false;
  }
  Bass.create(req.body, (err, createdBass)=>{
    res.redirect('/basses');
  })
});



module.exports = router;

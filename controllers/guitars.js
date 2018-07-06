const express = require('express');
const router = express.Router();
const Guitar = require('../models/guitars.js');

// router.get('/seed', (req, res)=>{
//   Guitar.create(
//     [
//       {
//         brand:'gibson'
//         strings:6,
//         wood:'maple',
//         fretboard:'ebony'
//         readyToBuild: true
//       },
//       {
//         brand:'fender'
//         strings:6,
//         wood:'alder',
//         fretboard:'rosewood'
//         readyToBuild: true
//       },
//       {
//         brand:'gibson'
//         strings:12,
//         wood:'maple',
//         fretboard:'rosewood'
//         readyToBuild: true
//       },
//       {
//         brand:'gibson'
//         strings:6,
//         wood:'koa',
//         fretboard:'ebony'
//         readyToBuild: false
//       },
//       {
//         brand:'fender'
//         strings:6,
//         wood:'maple',
//         fretboard:'ebony'
//         readyToBuild: false
//       },
//       {
//         brand:'fender'
//         strings:12,
//         wood:'mahogany',
//         fretboard:'ebony'
//         readyToBuild: false
//       }
//     ],
//     (err, data)=>{
//         res.redirect('/guitars')
//     }
//   )
// });
//
router.delete('/:id', (req, res)=>{
  Guitar.findByIdAndRemove(req.params.id, (err, deletedGuitar)=>{
    res.redirect('/guitars');
  })
});

router.get('/:id/edit', (req, res)=>{
  Guitar.findById(req.params.id, (err, foundGuitar)=>{
    res.render(
      'edit.ejs',
      {
        guitar:foundGuitar
      }
    );
  });
});

router.put('/:id', (req, res)=>{
  if(req.body.readyToBuild === 'on'){
    req.body.readyToBuild = true;
  } else {
    req.body.readyToBuild = false;
  }
  Guitar.findByIdAndUpdate(req.params.id, req.body, {new:true},
  (err, updatedModel)=>{
    res.redirect('/guitars');
  });
});

router.get('/new', (req,res)=>{
  res.render('new.ejs');
});

router.get('/', (req, res)=>{
  Guitar.find({}, (err, allGuitars)=>{
    res.render('index.ejs', {
      guitars: allGuitars
    });
  });
});

router.get('/:id', (req, res)=>{
  Guitar.findById(req.params.id, (err, foundGuitar)=>{
    res.render('show.ejs', {
      guitar:foundGuitar
    });
  });
});

router.post('/', (req, res)=>{
  if(req.body.readyToBuild === 'on'){
     req.body.readyToBuild = true;
  } else {
     req.body.readyToBuild = false;
  }
  Guitar.create(req.body, (err, createdGuitar)=>{
    res.redirect('/guitars');
  })
});

module.exports = router;

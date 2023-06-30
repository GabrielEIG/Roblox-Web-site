const { Router } = require('express');
const Videos = require('../models/videosYoutube.js');
const Mods = require('../models/mods.js');

const router = Router();


// Rutas videosYoutube
router.get('/tendencias', async (req, res) => {
  try {
    const videos = await Videos.find({});
    res.send(videos);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.post('/tendencias',(req,res)=>{
    const nuevoVideo = new Videos({
        id: req.body.id,
        title: req.body.title,
        url:req.body.url,
        event: req.body.event
    })
    console.log(nuevoVideo)
    nuevoVideo.save()
      .then(video => {
        res.send(video)
        console.log('Video guardada exitosamente')
      })
      .catch(err => {
        console.log(err)
      })
})



// Rutas Mods


router.get('/mods', async (req, res) => {
    try {
      const mods = await Mods.find({});
      res.send(mods);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  
  router.post('/mods',(req,res)=>{
      const nuevoMods = new Mods({
          id: req.body.id,
          title: req.body.title,
          description:req.body.description,
          subtitle: req.body.subtitle
      })
      console.log(nuevoMods)
      nuevoMods.save()
        .then(mod => {
          res.send(mod)
          console.log('Video guardada exitosamente')
        })
        .catch(err => {
          console.log(err)
        })
  })
  



module.exports = router;

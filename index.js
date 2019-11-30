import Express from 'express'
import open from 'open'

var app = Express();

export default function Interaction(url, port)
{
  return new Promise(function(resolve, reject) {

      app.get('/callback', async (req,res) => {
          resolve(req)

          res.send("<html><head><title>Login succesful</title><script>self.close()</script></head><body>You can now close this tab.</body></html>")
      });

      app.listen(port)

      open(url);
  })
}

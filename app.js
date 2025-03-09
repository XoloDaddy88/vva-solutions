const express = require('express');
const app = express();

// Serve ASCII art and contact info on the root path
app.get('/', (req, res) => {
  res.send(`
VVVVVVVV           VVVVVVVVVVVVVVVV           VVVVVVVV   AAA                    LLLLLLLLLLL             LLLLLLLLLLL                    CCCCCCCCCCCCC     
V::::::V           V::::::VV::::::V           V::::::V  A:::A                   L:::::::::L             L:::::::::L                 CCC::::::::::::C     
V::::::V           V::::::VV::::::V           V::::::V A:::::A                  L:::::::::L             L:::::::::L               CC:::::::::::::::C     
V::::::V           V::::::VV::::::V           V::::::VA:::::::A                 LL:::::::LL             LL:::::::LL              C:::::CCCCCCCC::::C     
 V:::::V           V:::::V  V:::::V           V:::::VA:::::::::A                  L:::::L                 L:::::L               C:::::C       CCCCCC     
  V:::::V         V:::::V    V:::::V         V:::::VA:::::A:::::A                 L:::::L                 L:::::L              C:::::C                    
   V:::::V       V:::::V      V:::::V       V:::::VA:::::A A:::::A                L:::::L                 L:::::L              C:::::C                    
    V:::::V     V:::::V        V:::::V     V:::::VA:::::A   A:::::A               L:::::L                 L:::::L              C:::::C                    
     V:::::V   V:::::V          V:::::V   V:::::VA:::::A     A:::::A              L:::::L                 L:::::L              C:::::C                    
      V:::::V V:::::V            V:::::V V:::::VA:::::AAAAAAAAA:::::A             L:::::L                 L:::::L              C:::::C                    
       V:::::V:::::V              V:::::V:::::VA:::::::::::::::::::::A            L:::::L                 L:::::L              C:::::C                    
        V:::::::::V                V:::::::::VA:::::AAAAAAAAAAAAA:::::A           L:::::L         LLLLLL  L:::::L         LLLLLLC:::::C       CCCCCC     
         V:::::::V                  V:::::::VA:::::A             A:::::A        LL:::::::LLLLLLLLL:::::LLL:::::::LLLLLLLLL:::::L C:::::CCCCCCCC::::C     
          V:::::V                    V:::::VA:::::A               A:::::A       L::::::::::::::::::::::LL::::::::::::::::::::::L  CC:::::::::::::::C     
           V:::V                      V:::VA:::::A                 A:::::A      L::::::::::::::::::::::LL::::::::::::::::::::::L    CCC::::::::::::C     
            VVV                        VVVAAAAAAA                   AAAAAAA     LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL       CCCCCCCCCCCCC

Veteran Vantage Automation LLC. website & product in development - services available! 
contact - James Derek Cooper at derek@vva.solutions or 513-667-7370
  `);
});

// Use the PORT environment variable if available, otherwise default to 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

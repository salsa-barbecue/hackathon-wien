import * as React from "react"
 
 function Seo({ children }) {
   const defaultTitle = 'Hackathon Wien'
   const defaultDescription = 'Landing page for Wien\'s Hackathon'
 
   return (
     <>
       <title>Hackathon Wien</title>
       <meta name="description" content={defaultTitle} />
       <meta property="og:title" content={defaultTitle} />
       <meta property="og:description" content={defaultDescription} />
       <meta property="og:type" content="website" />
       <meta name="twitter:card" content="summary" />
       <meta name="twitter:creator" content={"Syrma"} />
       <meta name="twitter:title" content={defaultTitle} />
       <meta name="twitter:description" content={defaultDescription} />
       {children}
     </>
   )
 }
 
 export default Seo
 

import Features from './components/features';
import Footer from './components/footer';
import Header from './components/header';
import Introduction from './components/introduction';
import Module1 from './components/module1';
import Module2 from './components/module2';
import Module3 from './components/module3';
import Module4 from './components/module4';
import Module5 from './components/module5';
import Module6 from './components/module6';
import Module7 from './components/module7';
import Navbar from './components/navbar';
import './index.css'

function App() {
  const backgroundImageUrl = 'https://hips.hearstapps.com/hmg-prod/images/network-connections-abstract-illustration-royalty-free-illustration-1571065792.jpg';

  return (
    <>
   
      <html lang="en">
        <head>
          <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>Cognicare</title>
              <link rel="shortcut icon" href="./logo.svg" type="image/x-icon"/>
            </head>
            <body  className='scroll-smooth bg-white dark:bg-slate-800 dark:text-white'>
              <div className="App">
                <Navbar></Navbar>
                <Header></Header>
                <Introduction></Introduction>
                <Features></Features>
                <div className='flex overflow-x-scroll my-10 items-center '>
                <Module1></Module1>
                <Module2></Module2>
                <Module3></Module3>
                <Module4></Module4>
                <Module5></Module5>
                <Module6></Module6>
                <Module7></Module7>
                </div>
                <Footer></Footer>
              </div>

            </body>
          </html>
        </>

        );
}
export default App;

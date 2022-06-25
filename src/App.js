import './App.css';
import Director from './components/director';
import Count from './components/Placement';
import Navbar from './components/Navbar';
import Checker from './components/Institute';
import { Departmentupper, Departmentlower } from './components/department';
import Footer from './components/Footer';
import TopPlacement from './components/TopPlacement';


function App() {
  return (
    // components on homepage
    // <div>
    //    <Director/>
    //    <Count/>
    //   <Checker/> 
    // </div>



    // components on department website
    <div>
      <Navbar />
      <Departmentupper nameofhod=" ~Dr Geeta Sikka" hod='https://www.nitj.ac.in/images/faculty/20071962443.jpg'
      />
       <TopPlacement/>
      <Departmentlower name="CSE" introduction="Located in Jalandhar district of Punjab, NIT Jalandhar enjoys a really scenic environment 
    and pleasant weather. Established in the year 1987, as REC Jalandhar, NIT Jalandhar has been 
    declared as the Institute of National Importance under the Act of Parliament, 2007. Established
     in 1990 as the Department of Computer Science & Engineering, we have an excellent & rich history
      and an outstanding record of contributions to the profession and community."
        departmentimage='https://www.nitj.ac.in/cse/images/carousel/001_1.jpeg' />
        <Footer />
    </div>

  );
}

export default App;

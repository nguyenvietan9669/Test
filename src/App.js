import Calendar from "./Calendar/Calendar"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import EventDetail from "./Calendar/detail/EventDetail"

const App = () => (
  <Router>
     <Routes>
        <Route path="" element = {<Calendar/>}/>
        <Route path="/detail/:id" element = {<EventDetail/>}/>
     </Routes>
  </Router>
)

export default App
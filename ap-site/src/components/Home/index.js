import './index.scss'
import APLang from '../Subjects/APLang'
import APLit from '..//Subjects/APLit'
import APPhysics1 from '../Subjects/APPhysics1'
import APChem from '..//Subjects/APChem'
import APCalc from '..//Subjects/APCalc'
import APComp from '../Subjects/APComp'
import APWorld from '../Subjects/APWorld'

const Home = () => {
    return (
        <div class="home_page">
            <div class="side_1">
                <h2>AP Study Resources</h2>
                <p>I hope this website can be of support to those of you who are taking AP Classes and/or the exams. 
                    You might find the resources I share helpful, or you might not. We all have different ways of studying
                    and this website includes a collection of resources that I found to be useful for me. If you have 
                    any questions feel free to utilize the contact form.
                </p>
            </div>
            <div class="side_2">
                <h2>AP Subjects Included</h2>
                <ul>
                <a href="APLang"><li>AP English Language and Composition</li></a>
                <a href="APLit"><li>AP Literature and Composition</li></a>
                <a href="APPhysics1"><li>AP Physics 1</li></a>
                <a href="APChem"><li>AP Chemistry</li></a>
                <a href="APCalc"><li>AP Calculus BC</li></a>
                <a href="APComp"><li>AP Computer Science A</li></a>
                <a href="APWorld"><li>AP World History A</li></a>
                </ul>
            </div>
        </div>
    )
}


export default Home


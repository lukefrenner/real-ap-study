import './index.scss'
import Score from '../../../assets/images/IMG_1154.jpg'

const APLang = () => {
    return (
        <div class="page">
            <h1 id="overall_title">AP English Language and Composition</h1>
            <div class="explanation">
                <p>AP Language might initially feel similar to AP Lit. However, the two classes are actually quite different in various
                    ways. AP Lang isn't as focused on literature, as it is on specific choices writers make when writing their pieces of 
                    work. Additionally, rather than writing essays on a specific literary work, topics will be more general, based on 
                    historical, political, envirommental and many different factors. For me personally, this was more enjoyable than 
                    writing essays on literary works, as I enjoy writing about more real-world topics.
                </p>
            </div>

            <h2 class="sub_title">Unit By Unit Review</h2>
            <div class="past_exams_text text_1">
                <p> This class isn't based as much on units that need specific review. Throughout the year you will learn useful
                    information, but to prepare for the AP exam, there isn't much specific review material that I found neccesary 
                    to go through. 
                </p>
            </div>

            <h2 class="sub_title">AP Lang Exam Prep</h2>
            <div class="past_exams_text lit_text">
                <p>AP Lit has very defined question types that are on the exam that you will need to become extremely familiar with. They are:
                    <ol>
                    <li class="lit_heading">Synthesis Essay</li>
                        <ul>
                            <li> This essay type requires practice. This essay type requires you to first read through 6 sources
                                and then form an argument using information from the sources. Some of the sources can be lengthy and thus 
                                managing time is very important, as you have to read the sources and write the essay all within 
                                an hour. Thus by practicing you can decide how best to divide your time between reading and writing. 
                            </li>
                        </ul>
                    <li class="lit_heading">Rhetorical Anlaysis Essay</li>
                        <ul>
                            <li>Initially this essay typed seemed scary and difficult. Once I actually began writing one, I 
                                realized that this was actually my favorite essay type out of the 3. I enjoy reading the given passage
                                then taking note of specific rhetorical choices in the essay. It is important than you don't just list
                                out the choices in the essay, but rather incorporate them into an argument, making your essay actually
                                have a purpose.
                            </li>
                        </ul>
                    <li class="lit_heading">Argument Essay</li>
                        <ul>
                            <li>This essay type is sometimes easy and sometimes difficult for me. It seems to really depend on the prompt. 
                                This essay requires you to bring in evidence that you just already know. Thus when the prompt is about a topic
                                that I don't know very much, this can be difficult. However, I would recommend knowing a bunch of facts about 
                                a couple of historical figures as that has been very beneficial in my essay writing.
                            </li>
                        </ul>
                    </ol>

                    Each of these essay types requires lots of practice in order for you to become comfortable with them. You will 
                    have to write all 3 of these essay back to back, without a break on the exam, which isn't easy. Thus feeling 
                    familiar with the task beforehand will make your job on exam day feel much simpler. I would recommend 
                    sitting down with a timer and writing essays based on released exams in order to improve your skills before
                    the actual exam.
                </p>
            </div>
            <div class="past_exams">
                <iframe title="pdf_viewer" width="560" height="600" frameborder="0" src="https://apcentral.collegeboard.org/media/pdf/ap24-frq-english-language-set-1.pdf"/>
            </div>


            
            <h2 class="sub_title">Score Calculator</h2>
            <div class="score_calc">
                <img class="score_calc_img" src={Score} alt="score" />
                <p>This is a great resource to look at, especially as the AP test approaches. You can use to get a rough estimate
                    of what your current AP score would be. Then you can decide what you should focus your time on, whether that is 
                    FRQs, MCQs, or nothing at all!

                    <br /> <br />
                    <ul>
                    <li><a href="https://www.albert.io/blog/ap-english-language-score-calculator/" target="_blank">AP English Language and Composition Score Calculator</a></li> <br />
                    </ul>
                </p>
            </div>
        </div>
            
    )
}

export default APLang
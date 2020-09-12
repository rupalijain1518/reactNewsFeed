import React, { Component } from 'react';
import { Link } from 'react-router-dom'
const LeveragingData = {
    margin: "44px 0 0 29px"
};
const ThrivingDataThird = {
    margin: "44px 0 0 29px"
}
class Home extends Component {

    render() {
        return (
            <div>

                <div className="container-fluid MainHeaderBar">
                    <div className="row HeadPlatForm">
                        <div className="col-sm-7 HeadFontSet">
                            <div className="row">
                                <div className="col-sm-12 SetDataDigital">
                                    <h1>
                                        <span className="MainHeadSpan">An </span>
                                        <span>AI Powered Digital Learning Platform</span></h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 ParaPotential">
                                    <p>
                                        <span>We help Students to find a career that maximize </span>
                                        <span>their potential.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-sm-12 SetRigBtn">
                                    <a href="/register">
                                        <button to='/register' className="btn">Register here</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="offset-sm-1 col-sm-4">
                            <img className="w-100" src="images/SideBar.png" alt="SideBar" />
                        </div>
                    </div>
                </div>

                <section className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 SetLayeViewPhone">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-12 SetRoobetImgs SetBsckImgSec SetsBacksImgsSecs">
                                    <img src="images/roobet-min.png" alt="roobet" />
                                </div>
                                <div className="col-lg-9 col-md-8 col-sm-12 SetsBackImgSec SetsBacksImgData">
                                    <div className="row SetRowUnnamed">
                                        <div className="col-lg-1 offset-md-1 col-md-2 col-sm-3 SetDecisionImg">
                                            <img src="images/unnamed.png" alt="unnamed" style={{ width: "100%" }} />
                                        </div>
                                        <div className="col-md-8 col-sm-8 LeveragingData" style={LeveragingData}>
                                            <h2>Leveraging AI</h2>
                                        </div>
                                        <div className="offset-md-1 col-md-8 col-sm-12 SetArtificialPara">
                                            <p>ThirdEye core lies in Artificial Intelligence that acts as the perfect mentor by providing the best possible assistance and instant feedback to meet the desired outcome.</p>
                                        </div>
                                    </div>
                                    <div className="row SetOneselfData">
                                        <div className="col-lg-1 col-md-2 col-sm-3 SetsDecisionsImg">
                                            <img src="images/decision.png" alt="decision" style={{ width: "100%" }} />
                                        </div>
                                        <div className="col-md-8 col-sm-12 LeveragingDatas">
                                            <h2>Identifying Oneself</h2>
                                        </div>
                                        <div className="col-md-8 col-sm-12 p-0 SetArtificialsParas">
                                            <p>Through our team of experts, ThirdEye acts as a match-maker between passion and potential to ensure that our learners are directed to the right career path.</p>
                                        </div>

                                        <div className="col-lg-4 col-md-3 col-sm-12 p-0 SetsArtificialsParas">
                                            <img src={'images/449.png'} alt="449" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 BackImgImgsSecs">
                            <div className="pt-5 BackImgImgsChild">
                                <div className="offset-sm-1 col-sm-10 SetMobileView">
                                    <div className="SetDecisionImg">
                                        <img src="images/unnamed.png" alt="unnamed" style={{ width: "100%" }} />
                                    </div>
                                    <div className="LeveragingData">
                                        <h2>Leveraging AI</h2>
                                    </div>
                                    <div className="LeveragingsDatas">
                                        <img src="images/roobet.png" alt="roobet" />
                                    </div>
                                    <div className="SetArtificialPara">
                                        <p>ThirdEye core lies in Artificial Intelligence that acts as the perfect mentor by providing the best possible assistance and instant feedback to meet the desired outcome.</p>
                                    </div>
                                </div>
                                <div className="offset-sm-1 col-sm-10 SetMobileView">
                                    <div className="SetDecisionImg">
                                        <img src="images/decision.png" alt="decision" style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="LeveragingData">
                                        <h2>Identifying Oneself</h2>
                                    </div>
                                    <div className="LeveragingsDatas">
                                        <img src="images/449.png" alt="roobet" />
                                    </div>
                                    <div className="SetArtificialPara">
                                        <p>Through our team of experts, ThirdEye acts as a match-maker between passion and potential to ensure that our learners are directed to the right career path.</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 SetLowerSet">
                                    <img src="images/lower-screen-no2-bgcurve.png" alt="unnamed" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 SetLayeViewPhone">
                            <div className="row">
                                <div className="col-md-9 col-sm-12 SetsBacksImgsSecs BacksImgsSec">
                                    <div className="row SetRowUnnamed">
                                        <div className="col-lg-1 offset-md-3 col-md-2 col-sm-3 SetDecisionImg">
                                            <img src="images/people.png" alt="people" style={{ width: "100%" }} />
                                        </div>
                                        <div className="col-md-7 col-sm-8 LeveragingData">
                                            <h2>Exposure to Opportunities</h2>
                                        </div>
                                        <div className="offset-md-3 col-md-8 col-sm-12 p-0 ThirdEyesSet">
                                            <p>On the basis of self-analysis, The AI-enabled interactive platform introduces the learners to a plethora of educational streams for kickstarting their career.</p>
                                        </div>
                                    </div>
                                    <div className="row ThirdselfData">
                                        <div className="col-lg-4 col-md-5 col-sm-12 p-0">
                                            <img className="ThirdselfDataImg" src="images/227.png" alt="227" />
                                        </div>
                                        <div className="col-lg-1 col-md-2 col-sm-3 DataDecisionsImgs">
                                            <img src="images/technology.png" alt="technology" style={{ width: "100%" }} />
                                        </div>
                                        <div className="col-lg-6 col-md-5 col-sm-12 LeveragingsDatas">
                                            <h2>Gamification in Education</h2>
                                        </div>
                                        <div className="offset-lg-4 col-lg-7 offset-md-5 col-md-8 col-sm-12 p-0 SetArtificialsParas SetArtificials">
                                            <p>ThirdEye accelerates the process of holistic development of its learners by adopting a learning approach that maximizes engagement as well as enjoyment.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12 SetRoobetImg DataBackImg SetsBackImgSec">
                                    <img src="images/529.png" alt="529" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 BacksImgsImgsSecs">
                            <div className="pt-5 BackImgImgsChild">
                                <div className="offset-sm-1 col-sm-10 SetMobileView">
                                    <div className="SetDecisionImg">
                                        <img src="images/people.png" alt="people" style={{ width: '100%' }} />
                                    </div>
                                    <div className="LeveragingData">
                                        <h2>Exposure to Opportunities</h2>
                                    </div>
                                    <div className="LeveragingsDatas">
                                        <img src="images/529.png" alt="roobet" width="100%" />
                                    </div>
                                    <div className="SetArtificialPara">
                                        <p>On the basis of self-analysis, The AI-enabled interactive platform introduces the learners to a plethora of educational streams for kickstarting their career.</p>
                                    </div>
                                </div>
                                <div className="offset-sm-1 col-sm-10 SetMobileView">
                                    <div className="SetDecisionImg">
                                        <img src="images/technology.png" alt="technology" width="100%" style={{ width: '100%' }} />
                                    </div>
                                    <div className="LeveragingData">
                                        <h2>Gamification in Education</h2>
                                    </div>
                                    <div className="LeveragingsDatas">
                                        <img src="images/227.png" alt="roobet" />
                                    </div>
                                    <div className="SetArtificialPara">
                                        <p>ThirdEye accelerates the process of holistic development of its learners by adopting a learning approach that maximizes engagement as well as enjoyment.</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 SetLowerSet">
                                    <img src="images/lower-screen-no2-bgcurve.png" alt="unnamed" style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 SetLayeViewPhone">
                            <div className="row">
                                <div className="col-lg-3 col-md-5 col-sm-12 SetRoobetImgBack ThirdEyeSecData SetsBacksImgsSecs">
                                    <img src="images/11.png" alt="roobet" />
                                </div>
                                <div className="col-lg-9 col-md-7 col-sm-12 SetsBackImgSec ThirdBackSetImg">
                                    <div style={ThrivingDataThird} className="row pt-5 ThrivingDataThird">
                                        <div className="col-lg-1 col-md-2 col-sm-3 SetDecisionDataImg">
                                            <img src="images/sports-and-competition.png" alt="sports-and-competition" style={{ width: '100%' }} />
                                        </div>
                                        <div className="col-md-10 col-sm-8 LeveragingData">
                                            <h2>Thriving in Competition</h2>
                                        </div>
                                        <div className="col-lg-8 col-md-9 col-sm-12 SetArtificialPara ParaSetDataThird">
                                            <p>Aim of instilling a spirit of competition and sportsmanship, the platform also engages its learners through Inter-School Competitions.</p>
                                        </div>
                                    </div>
                                    <div className="row SetDataself">
                                        <div className="col-lg-1 col-md-2 col-sm-3 SetsDecisionsImg">
                                            <img src="images/electronics.png" alt="electronics" style={{ width: '100%' }} />
                                        </div>
                                        <div className="col-md-8 col-sm-12 LeveragingDatas">
                                            <h2>Making Aptitude to meet Passion</h2>
                                        </div>
                                        <div className="col-lg-8 col-md-9 col-sm-12 p-0 SetArtificialsParas">
                                            <p>Through our team of experts, ThirdEye acts as a match-maker between passion and potential to ensure that our learners are directed to the right career path.</p>
                                        </div>

                                        <div className="col-md-3 col-sm-12 p-0 ArtificialsDataImgs">
                                            <img src="images/113.png" alt="449" style={{ width: '100%' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 BackImgImgsSecs">
                            <div className="pt-5 BackImgImgsChild">
                                <div className="offset-sm-1 col-sm-10 SetMobileView">
                                    <div className="SetDecisionImg">
                                        <img src="images/sports-and-competition.png" alt="competition" style={{ width: "100%" }} />
                                    </div>
                                    <div className="LeveragingData">
                                        <h2>Thriving in Competition</h2>
                                    </div>
                                    <div className="LeveragingsDatas">
                                        <img src="images/11.png" alt="roobet" style={{ width: '100%' }} />
                                    </div>
                                    <div className="SetArtificialPara">
                                        <p>Aim of instilling a spirit of competition and sportsmanship, the platform also engages its learners through Inter-School Competitions.</p>
                                    </div>
                                </div>
                                <div className="offset-sm-1 col-sm-10 SetMobileView">
                                    <div className="SetDecisionImg">
                                        <img src="images/electronics.png" alt="electronics" style={{ width: '100%' }} />
                                    </div>
                                    <div className="LeveragingData">
                                        <h2>Making Aptitude meet Passion</h2>
                                    </div>
                                    <div className="LeveragingsDatas">
                                        <img src="images/113.png" alt="roobet" style={{ width: '100%' }} />
                                    </div>
                                    <div className="SetArtificialPara">
                                        <p>Through our team of experts, ThirdEye acts as a match-maker between passion and potential to ensure that our learners are directed to the right career path.</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 SetLowerSet">
                                    <img src="images/lower-screen-no2-bgcurve.png" alt="unnamed" style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="container-fluid backgroundSet">
                    <div className="row SetsSpacesHaeds">
                        <div className="offset-md-1 col-md-10 col-sm-12">
                            <div className="row">
                                <div className="col-sm-12 IntegrationSet">
                                    <h2>Integration</h2>
                                </div>
                                <div className="col-xl-7 col-lg-7 col-md-5 col-sm-12 SetMobileImg">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12 ThirdEyeMobileSet">
                                            <img src="images/ThirdEye-Mobile.png" alt="Mobile" />
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="row SetButtonPos">
                                                <div className="col-xl-10 col-lg-12 col-sm-12 ButtonBarIcon">
                                                    <a href="/ai">

                                                        <button to='/ai' className="btn">
                                                            <img src="images/test.png" alt="no image" />
                                                            <span>AI</span>
                                                        </button>
                                                    </a>
                                                </div>
                                                <div className="col-xl-10 col-lg-12 col-sm-12 ButtonBarIcon ButtonsBarsIcons">
                                                    <a href="/courses">

                                                        <button to='/courses' className="btn">
                                                            <img src="images/online-course.png" alt="no image" />
                                                            <span>Courses</span>
                                                        </button>
                                                    </a>
                                                </div>

                                                <div className="col-xl-10 col-lg-12 col-sm-12 ButtonBarIcon ButtonBarIcons">
                                                    <a href="/career-guidance">

                                                        <button to='/career-guidance' className="btn">
                                                            <img src="images/map-route.png" alt="no image" />
                                                            <span>Career Guidance</span>
                                                        </button>
                                                    </a>
                                                </div>

                                                <div className="col-xl-10 col-lg-12 col-sm-12 ButtonBarIcon ButtonBarsIcons">
                                                    <a href="/quiz-competition">

                                                        <button to='/quiz-competition' className="btn">
                                                            <img src="images/test.png" alt='no image' />
                                                            <span>Quiz Competition</span>
                                                        </button>
                                                    </a>
                                                </div>

                                                <div className="col-xl-10 col-lg-12 col-sm-12 ButtonBarIcon ButtonBarIconed">
                                                    <a href="/performance-analytics">

                                                        <button to='/performance-analytics' className="btn">
                                                            <img src="images/human-resources-data-of-job-performance.png" />
                                                            <span>Performance Analytics</span>
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12 SetGraphicImg">
                                    <div className="row">
                                        <div className="offset-xl-2 col-xl-8 col-lg-12 offset-md-1 col-md-10 offset-sm-1 col-sm-10 SetGraphicData">
                                            <img src="images/5-3.png" alt="5-3" />
                                        </div>
                                        <div className="col-md-12 offset-sm-1 col-sm-10">
                                            <p>Using the state of the Art Analytics and AI, Students receive career guidance, Career streams, Simplified subject content, Numerous quizzes and Performance analysis all at the same place. </p>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 SetLayerImg">
                            <img src="images/5-1.png" alt="5-1" />
                        </div>
                    </div>
                </div>

                <div className="container-fluid PackageSecSett">
                    <div className="row pt-3">
                        <div className="offset-sm-1 col-md-4 col-sm-4">
                            <div className="row">
                                <div className="col-md-12 col-sm-10 PricingHead">
                                    <h3>Pricing</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="offset-md-1 col-md-10 col-sm-10 PricingImgSet">
                                    <img src="images/6-3.png" alt="6-3" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="offset-md-1 col-md-10 col-sm-10 PackageDataSet">
                                    <h4>Package A</h4>
                                    <div className="row">
                                        <div className="col-sm-12 PackagesSets">
                                            <ul className="breadcrumb">
                                                <li className="MainRateSet"> Rs </li>
                                                <li className="MainRateSet"> 1799 </li>
                                                <li className="MainRateUser"> / yr</li>
                                                <li className="MainRateUser"> / user</li>
                                            </ul>
                                            <p>Billed annually</p>
                                        </div>
                                    </div>
                                    <div className="row PackAgeDataSet">
                                        <div className="col-sm-12">
                                            <i className="fa fa-check" aria-hidden="true"></i>
                                            <span>All Content</span>
                                        </div>
                                        <div className="col-sm-12">
                                            <i className="fa fa-check" aria-hidden="true"></i>
                                            <span>All Tests</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 DataFeatures">
                                            <p>
                                                <a href="#">See all features</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 StartGetBtnSet">
                                            <a href="/register">
                                                <button to='/register' className="btn btn-outline-success">Get Started</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-7">
                            <div className="row ThirdEyesCareers">
                                <div className="col-sm-12 ThirdEyesHeadCareer">
                                    <h2>Right guidance can shape your career</h2>
                                </div>
                                <div className="col-sm-12 ThirdEyesCareer">
                                    <p>Move forward and optimize your path with us</p>
                                </div>
                                <div className="col-sm-12 SetsRigsBtns text-center">
                                    <a href="/register">
                                        <button to='/register' className="btn">Register here</button>
                                    </a>                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Home;
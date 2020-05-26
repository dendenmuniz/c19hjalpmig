import React, { Component } from "react";
import "./faq.css"


class FQAPage extends Component {
    render() {
        return (
            <div class="container " style={{ padding: "10px" }}>
                    <h2 class="card-titel  text-capitalize text-info"> FAQ</h2>
                
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h3 class="mb-0">
                                <button class="btn text-info bg-transparent" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How can I help other??
                                </button>
                            </h3>
                        </div>

                        <div id="collapseOne" class="collapse bg-transparent" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body qback">
                               <p class="faq">You can help your neighbors, friends, and family doing groceries, going to the pharmacy, or doing other things allowing then to stay home while they need.
                                <br />
                                Here you will find people that need help with some outdoor daily needs and you can sign up to help.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h2 class="mb-0">
                                <button class="btn text-info collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                   What kind of help I can request/give other?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div class="card-body qback">
                            <p class="faq"> 
                                You can help with: 
                                </p>
                                <ol class="test">
                                    <li>Groceries</li>
                                    <li>Pharmacy</li>
                                    <li>Take a pet out</li>
                                    <li>Take recicle trash out</li>
                                    <li>Pick up a post/box</li>
                                    <li>Other</li>
                                </ol>
                                <p class="faq">
                                For each request the Requester will provide details like shop list, addres, name of the pet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h2 class="mb-0">
                                <button class="btn text-info collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Do I need to give my bank information?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div class="card-body qback">
                            <p class="faq"> No, our website will not ask/save this information. You shloud directly with the Requester about the payments.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h2 class="mb-0">
                                <button class="btn text-info collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Do I need to pay something in order to request help?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div class="card-body qback">
                            <p class="faq"> No, our website is free of charges. You only need to pay your shop in the groceries, pharmacy or other. The Helper will only help to bring your shop to you.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h2 class="mb-0">
                                <button class="btn text-info collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Will I recieve some payment to help?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFive" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div class="card-body qback">
                            <p class="faq"> No, our website is free of charges. You only need to pay your shop in the groceries, pharmacy or other. The Helper will only help to bring your shop to you.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h3 class="mb-0">
                                <button class="btn text-info" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                    What is COVID-19?
                                </button>
                            </h3>
                        </div>

                        <div id="collapseSix" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body qback">
                            <p class="faq">  COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. COVID-19 is now a pandemic affecting many countries globally.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h3 class="mb-0">
                                <button class="btn text-info collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    What is coronavirus?
                                 </button>
                            </h3>
                        </div>
                        <div id="collapseSeven" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body qback">
                            <p class="faq">   Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h3 class="mb-0">
                                <button class="btn text-info collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                How can we protect others and ourselves if we don't know who is infected?
                                 </button>
                            </h3>
                        </div>
                        <div id="collapseEight" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body qback">
                            <p class="faq">  Practicing hand and respiratory hygiene is important at ALL times and is the best way to protect others and yourself.</p>
                            <p class="faq"> When possible maintain at least a 1 meter distance between yourself and others. This is especially important if you are standing by someone who is coughing or sneezing.  Since some infected persons may not yet be exhibiting symptoms or their symptoms may be mild, maintaining a physical distance with everyone is a good idea if you are in an area where COVID-19 is circulating. </p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h3 class="mb-0">
                                <button class="btn text-info collapsed" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                What can I do to protect myself and prevent the spread of disease?
                                 </button>
                            </h3>
                        </div>
                        <div id="collapseNine" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body qback">
                            <p class="faq">  Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority. Most countries around the world have seen cases of COVID-19 and many are experiencing outbreaks. Authorities in China and some other countries have succeeded in slowing their outbreaks. However, the situation is unpredictable so check regularly for the latest news.</p>
                            <p class="faq"> You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions:</p>
                               <ol class="test">
                                    <li>Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.</li>
                                    <li>Maintain at least 1 metre distance between yourself and others. Why? When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease.</li>
                                    <li>Avoid going to crowded places. Why? Where people come together in crowds, you are more likely to come into close contact with someone that has COIVD-19 and it is more difficult to maintain physical distance of 1 metre.</li>
                                    <li>Avoid touching eyes, nose and mouth. Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and infect you.</li>
                                    <li>Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately and wash your hands. Why? Droplets spread virus. By following good respiratory hygiene, you protect the people around you from viruses such as cold, flu and COVID-19.</li>
                                    <li>Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others. Why? Avoiding contact with others will protect them from possible COVID-19 and other viruses.</li>
                                    <li>If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance if possible and follow the directions of your local health authority. Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.</li>
                                    <li>Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities. Why? Local and national authorities are best placed to advise on what people in your area should be doing to protect themselves.</li>                    
                                </ol>  
                            </div>
                        </div>
                        <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h3 class="mb-0">
                                <button class="btn text-info collapsed" type="button" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                    How to grocery shop safely?
                                 </button>
                            </h3>
                        </div>
                        <div id="collapseTen" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body qback">
                            <p class="faq"> When grocery shopping, keep at least 1-metre distance from others and avoid touching your eyes, mouth and nose. If possible, sanitize the handles of shopping trolleys or baskets before shopping. Once home, wash your hands thoroughly and also after handling and storing your purchased products.</p>
                            <p class="faq"> There is currently no confirmed case of COVID-19 transmitted through food or food packaging.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default FQAPage;
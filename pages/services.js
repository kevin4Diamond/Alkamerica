import Layout from '../components/Layout';

const Services = () => (
  <Layout>
    <h1>Alkaline</h1>
    <div className="services">
      <div className="services-list">
        <div className="item">
          <img src="/static/imgs/water9s.JPG" />
          <h2>Benefit</h2>
          <p>One of the main benefits of alkaline water is that it has positive effects on the improvement of gastrointestinal symptoms. For example, many acknowledge the ability alkaline water to ease discomforts or an upset stomach may occur. In most cases, drinking alkaline water, can alleviate unpleasant gastrointestinal symptoms. Efficacy or effects of alkaline water Improvement of gastrointestinal symptoms Alkaline water alleviates dull feelings in the stomach and stomach discomfort. It also helps gastrointestinal movement and improves bowel movement. What are the differences between a water ionizer generator and a water purifier? A water purifier is used for eliminating residual chlorine and impurities from tap water, in order to make clean water. A water ionizer is used for electrolyzing the purified water to make electrolytic hydrogen water and acidic water. Therefore, the functionality and characteristics of the generated water are completely different. The water ionizer can easily generate, at home, not only purified water that tastes better than tap water but also alkaline water that is good for health.</p>
        </div>
        <div className="item">
          <img src="/static/imgs/water10s.JPG" />
          <h2>What is an Ionizer?</h2>
          <p>A water ionizer (also known as an alkaline ionizer) is a home appliance which claims to raise the pH of drinking water by using electrolysis to separate the incoming water stream into acidic and alkaline components. The alkaline stream of the treated water is called alkaline water. Proponents claim that consumption of alkaline water results in a variety of health benefits, making it similar to the alternative health practice of alkaline diets. Such claims violate basic principles of chemistry and physiology. There is no medical evidence for any health benefits of alkaline water.

The machines originally became popular in Japan and other East Asian countries before becoming available in the U.S. and Europe.</p>
        </div>
        <div className="item">
          <img src="/static/imgs/water12s.JPG" />
          <h2>Health ClaimHealth Claim</h2>
          <p>Water ionizers are often marketed on the basis of health claims which are normally focused on their putative ability to make water more alkaline. A wide variety of benefits have been claimed, including the ability to slow aging,[7] prevent disease, offer protection from nuclear fallout,[8] give the body more energy, and offset the effects of acidic foods.[5]

There is no empirical evidence to support these claims, nor the claims that drinking ionized water will have a noticeable effect on the body.[9] Drinking ionized water or alkaline water does not alter the body’s pH due to acid-base homeostasis.[7] Additionally, many have inaccurately claimed that the process of electrolysis changes the structure of water from large non-bioavailable water clusters to small bioavailable water clusters, called “micro clusters”. However, there is no evidence such changes occur during electrolysis, and these claims not only contradict basic principles of chemistry,[3] [10], and biology[10], but if such chemical changes did occur it would be biologically harmful.</p>
        </div>
        <div className="item">
          <img src="/static/imgs/water13s.JPG" />
          <h2>Ionizer Machine</h2>
          <p>Despite being described as ‘water ionizers’ the machines are designed to work as water electrolyzers. This is an electrochemical process in which water is split to form hydrogen and oxygen by an electric current. The overall chemical reaction is shown below:

2 H2O(l) → 2 H2(g) + O2(g)
During this process, the water near the anode is acidic while the water near the cathode is alkaline.

2 H2O + 2e– → H2 + 2 OH– (at the cathode)
2 H2O → 4e− + O2 + 4 H+ (at the anode)
Water ionizers work by simply siphoning off the water near the cathode. Water siphoned off the cathode side contains increased levels of hydroxide (OH−) and would be expected to have a higher pH (i.e. be more alkaline), whereas water siphoned off near the anode would have increased levels of H+ making it acidic. The acidic water is claimed to be useful for household disinfecting.

The effectiveness of the process is debatable because electrolysis requires significant amounts of time and power; hence, the amount of hydroxide that could be generated in a fast moving stream of water such as a running tap would be minimal at best. Additionally, the process of reversing the reaction requires much less energy, so if the area between the alkaline and acidic water is at least semi-permeable, the water will undergo another reaction that just leaves neutral water. The second reaction is shown below:

H+ + OH− → H2O
However, many conventional machines these days use a semi-permeable ion-exchange membrane to separate the two compartments. Therefore, if the concentration of minerals is high enough, the pH of the anolyte can be 4-6 while the pH of the catholyte can be 8-12.[1] Similar machines have been used to produce electrolyzed water which is chemically much different because it also contains sodium hypochlorite, the main ingredient in bleach, and may therefore be used as a disinfectant.</p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .services {
        max-width: 1000px;
        margin: 0 auto;
      }
      .services-list {
        padding: 0 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .services .item {
        padding: 20px;
        margin-bottom: 40px;
        width: 50%;
      }
      img {
        max-width: 100%;
      }
      h2 {
        margin: 0 0 5px 0;
      }
      p {
        font-size: 18px;
        text-align: left;
        color: #777;
      }
      @media (max-width: 600px) {
        .services .item {
          width: auto;
          padding: 10px 20px;
        }
      }
    `}</style>
  </Layout>
);

export default Services;
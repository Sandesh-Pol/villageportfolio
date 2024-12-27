import arrowRight from "../assets/icons/right-arrow.png";
import map from "../assets/map.png";
import img1 from "../assets/img1.jpeg"
import startBG from "../assets/starBG.png";
export const HeroSect = () => {
  return (
    <>
      <div className="Hero-sect flex items-center gap-x-5 w-full">
        <div className="hero-text w-1/2 relative">
          
          <div className="circle size-[45vw] circle-shadow rounded-full absolute -left-24 -top-40 -z-10 bg-[#fdf3f6]"></div>
          <div className="text-section text-[#21040A] px-11 w-2/3 z-30 relative top-20 left-10">
            <div className="headline tracking-wide text-5xl flex gap-x-4">
              <span>एक</span> <span>वैशिष्ट्यपूर्ण</span> <span>गाव</span>
            </div>
            <div className="headline tracking-wide text-5xl flex gap-x-4 items-end">
              माझं<span className="text-6xl hero-font-gradient">शेठफळ</span>
              <span className="text-2xl">नागोबाचे...</span>
            </div>
            <div className="desc mt-5 text-sm font-medium font-tiro italic">
              नागपूजा, प्राचीन देवस्थाने आणि आधुनिक शेतीतून आर्थिक उन्नती
              साधणारे सोलापूर जिल्ह्यातील करमाळा तालुक्याचे एक वैशिष्ट्यपूर्ण
              गाव...
            </div>
            <button className="bg-[#E3265A] rounded-full w-2/3 h-10 py-2 flex items-center justify-center gap-x-1 text-white font-outfit uppercase font-bold tracking-widest mt-10">
              Next <div className="w-[0.1px] h-full bg-white ml-5"></div>
              <img className="ml-2" src={arrowRight} alt="" />
            </button>
          </div>
        </div>
        <div className="hero-map w-1/2 flex justify-center items-center">
          <img className="w-[50vw] relative top-5 right-10" src={map} alt="" />
        </div>
      </div>
      <div class="relative top-10 flex items-center bg-gray-100 p-6">
        <div class="infoimg w-1/2 flex justify-center">
          <img class="absolute top-5 w-[500px] left-20 rounded-lg shadow-lg" src={img1} alt="Description" />
        </div>
        <div class="infodata w-1/2 px-10 text-gray-700">
          <h2 class="text-lg font-semibold mb-4">हेमाडपंती...</h2>
          <p class="mb-4 leading-relaxed">
          हेमाडपंथी पद्धतीने बांधलेले यादवपुर्व काळातील पुरातन शिवमंदिर ( नागनाथ मंदिर) उंच शिखर भव्य दरवाजा दगडी बांधकामातून उभारलेले स्थापत्य कलेचा उत्तम नमुना असलेले प्राचीन मंदिर आत शिवलिंग त्याच्या मागे  पंचधातूची  सुबक अशी मुख्य मुर्ती त्यावर नागफणी शेजारी शेटफळ नाथाचे दुसरे एक मंदिर त्याच्यासमोर आखीव रेखीव अशी बारव शेजारी भव्य असे पुष्करणी तीर्थकुंड (मोठी विहीर)
          </p>
          <button class="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600">
            See More
          </button>
        </div>
      </div>

    </>
  );
};

import React from 'react'

const WorkExperience = () => {
  return (
    <div className="flex flex-col items-center h-screen w-screen mt-16">
    <img src={require('../assets/sunriseblack.png')} alt="sunrise" width="100"/>

    <p className="text-6xl font-serif mt-3 text-[#414141]">Work Experience</p>
    <div className="flex flex-row w-screen mt-16 justify-around h-1/2">

      <div className="flex flex-col w-80 border-2 rounded-md items-center p-4">
        <div className="h-1/3  flex items-center">
          <img src={require('../assets/rswhite.png')} alt="profile pic of Rachel"  width="175px" className="basis-1/3"/>
        </div>
        
        <div className="basis-2/3">
          <li>Developed and maintain custom Shopify storefront for high-growth start-up</li>
          <li>Design and launch ad campaigns - increased audience reach by 600% to date</li>
          <li>Create polished social media content to drive sales</li>
        </div>
      </div>


      <div className="flex flex-col w-80 items-center p-4 border-2 rounded-md">
        <div className="h-1/3 flex items-center">
          <img src={require('../assets/varsity.png')} alt="profile pic of Rachel"  height="100px" width="100px"/>
        </div>
        
        <div className="h-2/3">
          <li>Trained students in calculus and advanced math</li>
          <li>Improved student outcomes via adapted lesson plans and communicated progress to parents</li>
          <li>Used academic coaching skills to help students learn time management and organizational techniques</li>
        </div>
      </div>

      <div className="flex flex-col w-80 border-2 items-center p-4 border-2 rounded-md">
        <div className="h-1/3 flex items-center">
          <img src={require('../assets/progenesis.png')} alt="profile pic of Rachel" height="103px"  width="192px" className=""/>
        </div>

        <div className="basis-2/3">
          <li>Aided clinical laboratory scientists in genetic sequencing workflow (PCR and NextGen sequencing) to ensure accuracy of patient results (100-200+ samples/day)</li>
          <li>Extracted DNA from whole blood patient samples to be analyzed for patient-specific assays</li>
          <li>Designed novel packaging with CEO to increase logistical efficiency of embryo biopsy transport</li>
        </div>
      </div>

    </div>
    




    </div>
  )
}

export default WorkExperience

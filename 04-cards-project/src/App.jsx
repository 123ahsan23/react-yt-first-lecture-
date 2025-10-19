import Card from "./Components/Card";
import User from "./Components/User";


const App = ()=>{
//   const arr = [{
//     name:"Ahsan",
//     age:22
//   },{
//     name:"Ali",
//     age:27
//   },{
//     name:"Arslan",
//     age:23
//   }]

// const arr = [10,20,30];


const jobOpenings = [
  {
    brandLogo: "https://thumbs.dreamstime.com/b/meta-logo-icon-american-multinational-company-parent-organization-facebook-instagram-whatsapp-others-vector-233392134.jpg",
    name: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag: "Full-time",
    tag2: "Junior-level",
    pay: "$48/hour",
    location: "Lahore, Pakistan"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WU0Emt19dyXiCPIuhVtxIFbqx13mkj54hA&s",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag: "Full-time",
    tag2: "Mid-level",
    pay: "$55/hour",
    location: "Lahore, Pakistan"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    name: "Apple",
    datePosted: "10 days ago",
    post: "UI/UX Designer",
    tag: "Part-time",
    tag2: "Senior-level",
    pay: "$60/hour",
    location: "Lahore, Pakistan"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    name: "Netflix",
    datePosted: "3 weeks ago",
    post: "Backend Engineer",
    tag: "Full-time",
    tag2: "Senior-level",
    pay: "$70/hour",
    location: "Lahore, Pakistan"
  },
  {
    brandLogo: "https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Google",
    datePosted: "1 week ago",
    post: "Machine Learning Engineer",
    tag: "Full-time",
    tag2: "Mid-level",
    pay: "$80/hour",
    location: "Lahore, Pakistan"
  },
  {
    brandLogo: "https://toppng.com/uploads/preview/microsoft-logo-hd-11563140791lh7zg8bhmr.png",
    name: "Microsoft",
    datePosted: "10 weeks ago",
    post: "Cloud Solutions Architect",
    tag: "Full-time",
    tag2: "Senior-level",
    pay: "$75/hour",
    location: "Lahore, Pakistan"
  },
  {
    brandLogo: " https://static.vecteezy.com/system/resources/previews/020/336/484/non_2x/tesla-logo-tesla-icon-transparent-png-free-vector.jpg",
    name: "Tesla",
    datePosted: "4 days ago",
    post: "Software QA Engineer",
    tag: "Full-time",
    tag2: "Junior-level",
    pay: "$45/hour",
    location: "Lahore, Pakistan"
  },
  {
    brandLogo: "https://e7.pngegg.com/pngimages/456/74/png-clipart-nvidia-grid-logo-business-nvidia-electronics-text-thumbnail.png",
    name: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "AI Research Engineer",
    tag: "Full-time",
    tag2: "Senior-level",
    pay: "$90/hour",
    location: "Lahore, Pakistan"
  },
  {
    brandLogo: "https://www.svgrepo.com/show/306500/openai.svg",
    name: "OpenAI",
    datePosted: "6 days ago",
    post: "Prompt Engineer",
    tag: "Part-time",
    tag2: "Mid-level",
    pay: "$65/hour",
    location: "Lahore, Pakistan"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFpl7HmHCtGdQ2gaHc4NPSU_yBW9d7NNflA&s",
    name: "Samsung",
    datePosted: "8 weeks ago",
    post: "Mobile App Developer",
    tag: "Full-time",
    tag2: "Mid-level",
    pay: "$50/hour",
    location: "Lahore, Pakistan"
  }
];


console.log(jobOpenings);



  return (
    <div className="parent">
      {/* <User name= "Ahsan" age = {22}/>
      <User name= "Ali" age = {23}/> */}

      {/* {arr.map(function(elem){
        return <User name = {elem.name} age = {elem.age} />
      })} */}

      {jobOpenings.map(function(elem , idx){
        // return <h1>{elem.name}</h1>
       return <div key= {idx}>
        <Card companyName = {elem.name} datePosted = {elem.datePosted} post = {elem.post} tag1 = {elem.tag} tag2 = {elem.tag2} brandlogo = {elem.brandLogo} pay = {elem.pay} location = {elem.location}/>
       </div>
      })}
    </div>
  )
}

export default App;
import Card from "./components/Card";
const App = () => {
  const jobOpenings = [
    {
      id: 1,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFfrlAlMtOaBaRzkCLdfRX3D9aJ8b6lZDjmBBKTalLrw&s",
      company: "Google",
      datePosted: "2 days ago",
      posts: "Software Engineer",
      tag1: "Full-time",
      tag2: "Junior",
      pay: "$42/hour",
      location: "Mumbai, India",
    },
    {
      id: 2,
      logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      company: "Microsoft",
      datePosted: "5 days ago",
      posts: "Software Engineer",
      tag1: "Full-time",
      tag2: "Senior",
      pay: "$48/hour",
      location: "Mumbai, India",
    },
    {
      id: 3,
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      company: "Amazon",
      datePosted: "1 week ago",
      posts: "Software Development Engineer",
      tag1: "Full-time",
      tag2: "Junior",
      pay: "$40/hour",
      location: "Mumbai, India",
    },
    {
      id: 4,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1JOBiq1wbzhhqmbCxSCv2AiOJt3Fr-tDwc6cNBaaR71yrzIGz65Ft1Bv&s=10",
      company: "Apple",
      datePosted: "3 days ago",
      posts: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$45/hour",
      location: "Mumbai, India",
    },
    {
      id: 5,
      logo: "https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_sq.jpg",
      company: "Meta",
      datePosted: "2 weeks ago",
      posts: "React Developer",
      tag1: "Full-time",
      tag2: "Senior",
      pay: "$50/hour",
      location: "Mumbai, India",
    },
    {
      id: 6,
      logo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
      company: "Netflix",
      datePosted: "4 days ago",
      posts: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Senior",
      pay: "$55/hour",
      location: "Mumbai, India",
    },
    {
      id: 7,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQis9G3b2X-vYdsceE2ulwqV-FyNVO2xqBn_sw6s8-pM2OMm5hCjutTn6th&s=10",
      company: "NVIDIA",
      datePosted: "1 week ago",
      posts: "AI/ML Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$52/hour",
      location: "Mumbai, India",
    },
    {
      id: 8,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5N9VrE7srJkSdiQkrwN2K8ZkA9y1XgIXk7z5UzVVx2g&s",
      company: "Oracle",
      datePosted: "3 weeks ago",
      posts: "Cloud Engineer",
      tag1: "Full-time",
      tag2: "Junior",
      pay: "$38/hour",
      location: "Mumbai, India",
    },
    {
      id: 9,
      logo: "https://1000logos.net/wp-content/uploads/2017/02/Color-IBM-Logo.jpg",
      company: "IBM",
      datePosted: "6 days ago",
      posts: "Data Engineer",
      tag1: "Part-time",
      tag2: "Junior",
      pay: "$35/hour",
      location: "Mumbai, India",
    },
    {
      id: 10,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbCssfTJIp9RiRgE5FtiftQMEfQx_rzov_R48esB1rqA&s=10",
      company: "Adobe",
      datePosted: "2 weeks ago",
      posts: "Full Stack Developer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$44/hour",
      location: "Mumbai, India",
    },
  ];

  // console.log(jobOpenings);
  // obj.map(function (elem) {
  //   console.log(elem.user, elem.age);
  // });
  return (
    <div className="parent">
      {jobOpenings.map(function(elem){
        return <Card key={elem.id} company={elem.company} posts={elem.posts} tag1={elem.tag1} tag2={elem.tag2} datePosted={elem.datePosted}
         pay={elem.pay} location={elem.location} logo={elem.logo}/>;
      })}
      {/* <User /> */}
      {/* <Card />
      <Card /> */}
    </div>
  );
};

export default App;

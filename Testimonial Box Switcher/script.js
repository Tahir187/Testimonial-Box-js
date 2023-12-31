const testimonialsContainer = document.querySelector('.testimonial-container');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
     {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/70.jpg',
        text: "I've worked with literally hundreds of HTML/CSS developers and i have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developer who respect each and every aspect of a throughly out design and fo do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
     },
     {
        name: 'June Cha',
        position: 'Software Engineer',
        photo: 'https://randomuser.me/api/portraits/men/14.jpg',
        text: "This guy is amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!"
     },
     {
        name: 'Idia Niskanen',
        position: 'Data Entry',
        photo: 'https://randomuser.me/api/portraits/men/10.jpg',
        text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. we'll definitely repeat with him."
     },
     {
        name: 'Renee Sims',
        position: 'Receptionist',
        photo: 'https://randomuser.me/api/portraits/men/0.jpg',
        text: "This guy does everything he can to get the job done and done right. This is the second time I'have hired him, and I'll hire him again in the future."
     },
     {
        name: 'Jonathan Nunfiez',
        position: 'Graphic Designer',
        photo: 'https://randomuser.me/api/portraits/men/83.jpg',
        text: "I had concerns that due to a tight deadline this project can't be done. But this guy proved me worng not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!"
     },
     {
        name: 'Sasha Ho',
        position: 'Accountand',
        photo: 'https://randomuser.me/api/portraits/women/12.jpg',
        text: "This guy is a top noth designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!"
     },
     {
        name: 'Veeti Seppanen',
        position: 'Director',
        photo: 'https://randomuser.me/api/portraits/men/28.jpg',
        text: "This guy is a young talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achive due dates and outstanding results."
     },
]

let idx = 1;

function updateTestimonial(){
   const {name, position, photo, text} = testimonials[idx];
   testimonials.innerHTML = text;
   userImage.src = photo;
   username.innerHTML = name;
   role.innerHTML = position;

   idx++

   if(idx > testimonials.length - 1){
    idx = 0;
   }
}

setInterval(updateTestimonial, 10000);
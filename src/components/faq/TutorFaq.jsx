import React, {useState} from 'react';
import "./TutorFaq.scss";

const TutorFaq = () => {
    const faqData = [
        {
          question: 'What is coding or programming?',
          answer: `Coding is the use of special instructions called "code" to tell a computer what to do. Just like giving directions to a friend, you tell the computer what steps to follow to make something happen on the screen, like making a character move in a game or drawing a picture.`
        },
        {
          question: 'How will coding help my child?',
          answer: `When your child learns to code, they're learning how to use this tool to make their ideas come to life. They can create games, stories, or even helpful apps that solve problems. It's like giving them a superpower to express themselves and make the things they dream about.

          But coding isn't just about making fun stuff on the computer. It's also a way for your child to learn important skills like problem-solving, creativity, and logical thinking. These skills can help them in school, in their future jobs, and even in everyday life.
          
          So, by learning to code, your child isn't just playing on the computer – they're gaining valuable skills that can help them succeed in the future.`,
        },
        {
          question: 'What can my child do after learning coding?',
          answer: `
          Learning coding is like giving your child a key to a world of endless possibilities. With coding skills, they can create games, apps, and websites, while also developing problem-solving abilities that help them tackle real-life challenges. This opens doors to exciting career paths in technology and fosters connections within a supportive coding community. By learning to code, your child gains not just practical skills, but also a passport to innovation and opportunity.`,
        },
        {
          question: 'Where can my child work after learning coding?',
          answer: `
          After learning coding, your child can pursue a range of exciting career paths in the technology industry. They can become software developers, web developers, or mobile app developers, creating applications and websites for companies or clients. Alternatively, they may choose to specialize in areas like game development, data science, cybersecurity, or artificial intelligence, depending on their interests and talents. With coding skills, the opportunities are vast, allowing your child to embark on a fulfilling career journey in the ever-evolving world of technology.`,
        },
        {
          question: `Why coding is important for the child

          `,
          answer: `Coding is crucial for children as it equips them with essential skills for the future. Firstly, coding fosters problem-solving and critical thinking abilities, teaching children to break down complex problems into manageable tasks and develop logical solutions. These skills are invaluable in various aspects of life, from academics to everyday challenges.

          Secondly, coding encourages creativity and innovation. By learning to code, children can express their ideas through digital projects, such as games, animations, or websites. This not only enhances their creativity but also instills confidence in their ability to bring their visions to life.`,
        },
        {
          question: 'Do you render other services apart from code coaching?',
          answer: "Yes, Prettygigs is a design agency. So when we coach children or adults we are bringing industry experience to bear. And when we work for people we are also bringing indept knowledge of the craft.",
        },
        {
          question: 'What if am not satisfied with the service?',
          answer: 'There is a money back guarantee for every service rendered. However, we put in the best we can to offer the best service there is to it.',
        },
        {
          question: 'What payment methods are accepted on the platform?',
          answer: "The platform typically accepts various payment methods, including transfers, credit cards, debit cards. When you initiate payment of checkout, you're redirected to Flutterwave payment gateway from where you can see a secure place to enter your card details or get a bank account for transfer. If there are challenges you can contact us and we can find a more suitable payment method for you.",
        },
    ]
    const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <div className='tutor-faq'>
      {faqData.map((item, index) => (
        <div key={index} className='container'>
          <h3 onClick={() => toggleItem(index)}>
            QUESTION: {item.question}
            {expandedItems.includes(index) ? ' ←' : ' →'}
          </h3>
          {expandedItems.includes(index) && <p><span>ANSWER:</span> {item.answer}</p>}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TutorFaq;

       
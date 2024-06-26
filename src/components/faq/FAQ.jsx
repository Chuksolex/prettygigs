import React, {useState} from 'react';
import "./FAQ.scss";
import { faqData } from '../data/faqData';

const FAQ = () => {
    const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <div className='faq'>
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

export default FAQ;

       
import { useState } from 'react';
import PageBanner from '../components/PageBanner/PageBanner';
import faqData from '../data/faqData';
import { FaChevronDown } from 'react-icons/fa';
import './FAQ.css';
import usePageTitle from '../hooks/usePageTitle';

function FAQ() {
  usePageTitle('FAQ');
  // openId tracks WHICH single FAQ is currently expanded (by its id)
  // null means "none are open"
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {

    // If the clicked FAQ is already open, close it (set to null)
    // Otherwise, open this one (this automatically closes whatever was open before,
    // since openId can only hold ONE id at a time)
    setOpenId(openId === id ? null : id);
  };

  const leftColumn = faqData.slice(0, 8);
  const rightColumn = faqData.slice(8);
// A small reusable helper function that renders one FAQ item's JSX
  // Used for both columns so we don't repeat the same markup twice
  const renderFAQ = (item) => (
    <div className="faq_item" key={item.id}>
      <button className="faq_question" onClick={() => toggleFAQ(item.id)}>
        <span>{item.question}</span>
        <FaChevronDown
          className={openId === item.id ? 'faq_icon open' : 'faq_icon'}
        />
      </button>
      {openId === item.id && <p className="faq_answer">{item.answer}</p>}
    </div>
  );

  return (
    <div>
      <PageBanner title="FAQ" subtitle="Home / FAQ" />
      <div className="faq_page">
        <div className="faq_column">{leftColumn.map(renderFAQ)}</div>
        <div className="faq_column">{rightColumn.map(renderFAQ)}</div>
      </div>
    </div>
  );
}

export default FAQ;
import { useState } from 'react';
import axios from 'axios';

export default function SocialForm({ userId }) {
  const [socialLinks, setSocialLinks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/user/socialLink', {
        userId,
        socialLinks,
      });
      console.log('Social links saved successfully');
      console.log(socialLinks);
    } catch (error) {
      console.error('Failed to save social links', error);
    }
  };

  const handleInputChange = (e, index, field) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index][field] = e.target.value;
    setSocialLinks(updatedLinks);
  };

  const handleAddLink = () => {
    setSocialLinks([...socialLinks, { displayText: '', link: '' }]);
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = [...socialLinks];
    updatedLinks.splice(index, 1);
    setSocialLinks(updatedLinks);
  };

  return (
    <form onSubmit={handleSubmit}>
      {socialLinks.map((link, index) => (
        <div key={index}>
          <label htmlFor={`socialLinkDisplayText-${index}`}>Display Text</label>
          <input
            type="text"
            id={`socialLinkDisplayText-${index}`}
            value={link.displayText}
            onChange={(e) => handleInputChange(e, index, 'displayText')}
          />
          <label htmlFor={`socialLinkUrl-${index}`}>Link URL</label>
          <input
            type="text"
            id={`socialLinkUrl-${index}`}
            value={link.link}
            onChange={(e) => handleInputChange(e, index, 'link')}
          />
          <button type="button" onClick={() => handleRemoveLink(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddLink}>
        Add Link
      </button>
      <button type="submit">Save Links</button>
    </form>
  );
}

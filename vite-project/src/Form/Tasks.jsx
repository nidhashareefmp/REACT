import React, { useState } from 'react';
import './tasks.css';

const Tasks = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    position: "",
    info: "",
    cv: null,
  });

  const [errors, setErrors] = useState({});

  // ---------------------- HANDLE CHANGE ----------------------
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // ---------------------- VALIDATION ----------------------
  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required";

    if (!formData.email)
      newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid Email";

    if (!formData.phone)
      newErrors.phone = "Phone is required";
    else if (!/^[0-9]{7,15}$/.test(formData.phone))
      newErrors.phone = "Invalid Phone Number";

    if (!formData.country)
      newErrors.country = "Country is required";

    if (!formData.city.trim())
      newErrors.city = "City is required";

    if (!formData.address.trim())
      newErrors.address = "Address is required";

    if (!formData.position)
      newErrors.position = "Select a position";

    if (!formData.cv)
      newErrors.cv = "CV is required";
    else if (formData.cv.size > 1024 * 1024)
      newErrors.cv = "File must be under 1MB";

    return newErrors;
  };

  // ---------------------- SUBMIT ----------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Form Submitted Successfully!");
    console.log("Form Data:", formData);

    // RESET FORM
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      address: "",
      position: "",
      info: "",
      cv: null,
    });
    setErrors({});
  };

  return (
    <div className="job-container">
      <h2>Job Application Form Widget</h2>

      <form onSubmit={handleSubmit} className="job-form">

        {/* FIRST + LAST NAME */}
        <div className="row">
          <div className="field">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          <div className="field">
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
        </div>

        {/* EMAIL + PHONE */}
        <div className="row">
          <div className="field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="field">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
        </div>

        {/* COUNTRY */}
        <div className="field">
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {errors.country && <p className="error">{errors.country}</p>}
        </div>

        {/* CITY */}
        <div className="field">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <p className="error">{errors.city}</p>}
        </div>

        {/* ADDRESS */}
        <div className="field">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        {/* POSITION */}
        <div className="field">
          <select name="position" value={formData.position} onChange={handleChange}>
            <option value="">Choose desired position</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Designer">Designer</option>
          </select>
          {errors.position && <p className="error">{errors.position}</p>}
        </div>

        {/* ADDITIONAL INFO */}
        <div className="field">
          <textarea
            name="info"
            placeholder="Additional info"
            value={formData.info}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>

        {/* FILE UPLOAD */}
        <div className="cv-upload">
  <input
    type="text"
    placeholder="Add your CV"
    value={formData.cv ? formData.cv.name : ""}
    disabled 
  /> 

  <label className="browse-btn">
    Browse
    <input
      type="file"
      name="cv"
      onChange={handleChange}
      hidden
    />
  </label>
</div>

{errors.cv && <p className="error">{errors.cv}</p>}

        {/* BUTTONS */}
        <div className="btn-row">
          <button type="button" className="reset-btn" onClick={() => setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
            city: "",
            address: "",
            position: "",
            info: "",
            cv: null,
          })}>
            Reset
          </button>

          <button type="submit" className="send-btn">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Tasks;

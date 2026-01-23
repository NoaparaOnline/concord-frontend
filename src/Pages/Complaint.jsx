import React, { useState, useEffect } from 'react';
import { CompanyLogos, Heading } from '../components';
import bannerimg from '../Statics/assets/ContactBanner.jpg';
import BannerWithText from '../components/ReusableComponents/BannerImgComponents/BannerImgComponents';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const Complaint = () => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    date: '',
    originatorName: '',
    originatorAddress: '',
    originatorMobile: '',
    originatorEmail: '',
    customerName: '',
    customerAddress: '',
    customerMobile: '',
    productName: '',
    productBatchNo: '',
    productMfgDate: '',
    productExpDate: '',
    description: '',
    quantityAffected: ''
  });

  // Set current date on component mount
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, date: today }));
  }, []);

  const LinksBan = [
    {
      subLinkName: t("contact.home_text"),
      subDash: '/',
      subLink: '/'
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Required fields validation
    const requiredFields = [
      'originatorName',
      'originatorAddress',
      'originatorMobile',
      'originatorEmail',
      'customerName',
      'customerAddress',
      'customerMobile',
      'productName',
      'productBatchNo',
      'productMfgDate',
      'productExpDate',
      'description',
      'quantityAffected'
    ];

    const emptyFields = requiredFields.filter(field => !formData[field]);
    if (emptyFields.length > 0) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.originatorEmail)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Mobile number validation (basic)
    const mobileRegex = /^[0-9+\-\s()]+$/;
    if (!mobileRegex.test(formData.originatorMobile)) {
      toast.error('Please enter a valid originator mobile number');
      return;
    }
    if (!mobileRegex.test(formData.customerMobile)) {
      toast.error('Please enter a valid customer mobile number');
      return;
    }

    // Date validation - Exp date should be after Mfg date
    if (formData.productMfgDate && formData.productExpDate) {
      if (new Date(formData.productExpDate) <= new Date(formData.productMfgDate)) {
        toast.error('Expiry date must be after manufacturing date');
        return;
      }
    }

    // Here you would typically send the data to your backend
    console.log('Complaint submitted:', formData);
    toast.success('Your complaint has been submitted successfully! We will contact you soon.');

    // Reset form (except date)
    const today = new Date().toISOString().split('T')[0];
    setFormData({
      date: today,
      originatorName: '',
      originatorAddress: '',
      originatorMobile: '',
      originatorEmail: '',
      customerName: '',
      customerAddress: '',
      customerMobile: '',
      productName: '',
      productBatchNo: '',
      productMfgDate: '',
      productExpDate: '',
      description: '',
      quantityAffected: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Market Complaint - Health Associates</title>
      </Helmet>
      <BannerWithText
        imgSrc={bannerimg}
        heading="Market Complaint"
        subHeading="MARKET COMPLAINT"
        LinksBan={LinksBan}
        backposit={'center right'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
        height={"400px"}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />
      <Heading heading="Market Complaint Form" />

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <p className="text-muted mb-4">
                  As per DGDA compliance requirements, please fill out this market complaint form with accurate information.
                  All fields marked with <span className="text-danger">*</span> are mandatory.
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Date */}
                  <div className="mb-4">
                    <label htmlFor="date" className="form-label fw-bold">
                      Date <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control bg-light"
                      id="date"
                      name="date"
                      value={formData.date}
                      readOnly
                    />
                  </div>

                  <hr className="my-4" />

                  {/* Complaint Originator Information */}
                  <h5 className="mb-3 text-primary">Complaint Originator Information</h5>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="originatorName" className="form-label">
                        Originator Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="originatorName"
                        name="originatorName"
                        value={formData.originatorName}
                        onChange={handleChange}
                        placeholder="Enter originator name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="originatorMobile" className="form-label">
                        Originator Mobile No. <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="originatorMobile"
                        name="originatorMobile"
                        value={formData.originatorMobile}
                        onChange={handleChange}
                        placeholder="Enter mobile number"
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="originatorEmail" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="originatorEmail"
                        name="originatorEmail"
                        value={formData.originatorEmail}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="originatorAddress" className="form-label">
                        Originator Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="originatorAddress"
                        name="originatorAddress"
                        value={formData.originatorAddress}
                        onChange={handleChange}
                        placeholder="Enter complete address"
                        required
                      />
                    </div>
                  </div>

                  <hr className="my-4" />

                  {/* Customer Information */}
                  <h5 className="mb-3 text-primary">Customer Information</h5>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="customerName" className="form-label">
                        Customer Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="customerName"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        placeholder="Enter customer name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="customerMobile" className="form-label">
                        Customer Mobile No. <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="customerMobile"
                        name="customerMobile"
                        value={formData.customerMobile}
                        onChange={handleChange}
                        placeholder="Enter customer mobile number"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="customerAddress" className="form-label">
                      Customer Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="customerAddress"
                      name="customerAddress"
                      value={formData.customerAddress}
                      onChange={handleChange}
                      placeholder="Enter customer complete address"
                      required
                    />
                  </div>

                  <hr className="my-4" />

                  {/* Product Information */}
                  <h5 className="mb-3 text-primary">Product Information</h5>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="productName" className="form-label">
                        Product Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        placeholder="Enter product name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="productBatchNo" className="form-label">
                        Batch No. <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="productBatchNo"
                        name="productBatchNo"
                        value={formData.productBatchNo}
                        onChange={handleChange}
                        placeholder="Enter batch number"
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label htmlFor="productMfgDate" className="form-label">
                        Manufacturing Date <span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="productMfgDate"
                        name="productMfgDate"
                        value={formData.productMfgDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="productExpDate" className="form-label">
                        Expiry Date <span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="productExpDate"
                        name="productExpDate"
                        value={formData.productExpDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="quantityAffected" className="form-label">
                        Quantity Affected <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="quantityAffected"
                        name="quantityAffected"
                        value={formData.quantityAffected}
                        onChange={handleChange}
                        placeholder="e.g., 10 units"
                        required
                      />
                    </div>
                  </div>

                  <hr className="my-4" />

                  {/* Complaint Details */}
                  <h5 className="mb-3 text-primary">Complaint Details</h5>

                  <div className="mb-4">
                    <label htmlFor="description" className="form-label">
                      Description of Complaint <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="6"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Please provide detailed information about the complaint"
                      required
                    ></textarea>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      style={{ backgroundColor: '#0066b3', border: 'none' }}
                    >
                      Submit Complaint
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CompanyLogos />
    </>
  );
};

export default Complaint;

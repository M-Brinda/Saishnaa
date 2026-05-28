import React, { useState, useEffect } from "react";
import {
  Shield,
  Users,
  Mail,
  FileText,
  Search,
  Trash2,
  Download,
  Calendar,
  CheckCircle,
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("inquiries");
  const [searchTerm, setSearchTerm] = useState("");

  // Data States
  const [inquiries, setInquiries] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [papers, setPapers] = useState([]);
  const [leads, setLeads] = useState([]);

  // Load all localStorage caches on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    loadData();
  }, []);

  const loadData = () => {
    setInquiries(
      JSON.parse(localStorage.getItem("saishnaa_inquiries") || "[]"),
    );
    setApplicants(
      JSON.parse(localStorage.getItem("saishnaa_applicants") || "[]"),
    );
    setPapers(JSON.parse(localStorage.getItem("saishnaa_papers") || "[]"));
    setLeads(JSON.parse(localStorage.getItem("saishnaa_leads") || "[]"));
  };

  // Helper to delete an item
  const handleDeleteItem = (key, index) => {
    if (
      window.confirm("Are you sure you want to delete this submission entry?")
    ) {
      const data = JSON.parse(localStorage.getItem(key) || "[]");
      data.splice(index, 1);
      localStorage.setItem(key, JSON.stringify(data));
      loadData();
    }
  };

  // Helper to export currently viewed table to CSV
  const handleExportCSV = (tabName, dataList) => {
    if (dataList.length === 0) {
      alert("No data available to export.");
      return;
    }

    let csvContent = "";
    let fileName = `saishnaa_${tabName}_export_${new Date().toISOString().split("T")[0]}.csv`;

    if (tabName === "inquiries") {
      csvContent += "Date,Name,Email,Subject,Channel,Message\n";
      dataList.forEach((item) => {
        const msg = item.inquiry.message.replace(/"/g, '""');
        csvContent += `"${item.date}","${item.inquiry.name}","${item.inquiry.email}","${item.inquiry.subject}","${item.inquiry.channel}","${msg}"\n`;
      });
    } else if (tabName === "applicants") {
      csvContent +=
        "Date,Job Title,Name,Email,Phone,Channel,Resume Name,Cover Message\n";
      dataList.forEach((item) => {
        const cover = item.applicant.cover.replace(/"/g, '""');
        csvContent += `"${item.date}","${item.jobTitle}","${item.applicant.name}","${item.applicant.email}","${item.applicant.phone}","${item.applicant.channel}","${item.applicant.resumeName || "N/A"}","${cover}"\n`;
      });
    } else if (tabName === "papers") {
      csvContent +=
        "Date,Journal Code,Author Name,Author Email,Institution,Paper Title,File Name,Abstract\n";
      dataList.forEach((item) => {
        const abstract = item.paperAbstract.replace(/"/g, '""');
        csvContent += `"${item.date}","${item.journalCode}","${item.authorName}","${item.authorEmail}","${item.authorInstitution}","${item.paperTitle}","${item.fileName}","${abstract}"\n`;
      });
    } else if (tabName === "leads") {
      csvContent += "Date,Consultation Lead Email\n";
      dataList.forEach((item) => {
        csvContent += `"${item.date}","${item.email}"\n`;
      });
    }

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter lists based on tab & search term
  const getFilteredData = () => {
    const q = searchTerm.toLowerCase().trim();
    if (activeTab === "inquiries") {
      return inquiries.filter(
        (item) =>
          item.inquiry.name.toLowerCase().includes(q) ||
          item.inquiry.email.toLowerCase().includes(q) ||
          item.inquiry.subject.toLowerCase().includes(q) ||
          item.inquiry.message.toLowerCase().includes(q),
      );
    } else if (activeTab === "applicants") {
      return applicants.filter(
        (item) =>
          item.applicant.name.toLowerCase().includes(q) ||
          item.applicant.email.toLowerCase().includes(q) ||
          item.applicant.phone.toLowerCase().includes(q) ||
          item.jobTitle.toLowerCase().includes(q),
      );
    } else if (activeTab === "papers") {
      return papers.filter(
        (item) =>
          item.authorName.toLowerCase().includes(q) ||
          item.authorEmail.toLowerCase().includes(q) ||
          item.paperTitle.toLowerCase().includes(q) ||
          item.journalCode.toLowerCase().includes(q),
      );
    } else if (activeTab === "leads") {
      return leads.filter((item) => item.email.toLowerCase().includes(q));
    }
    return [];
  };

  const filteredItems = getFilteredData();

  return (
    <div
      className="page-fade-in"
      style={{
        backgroundColor: "#f4f5f8",
        minHeight: "100vh",
        marginTop: "100px",
        paddingBottom: "60px",
      }}
    >
      <div className="container">
        {/* Header Strip */}
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 p-4 rounded-4 bg-white border shadow-sm">
          <div className="d-flex align-items-center gap-3">
            <div
              className="p-3 rounded-circle text-white"
              style={{ backgroundColor: "var(--main-color)" }}
            >
              <Shield size={28} />
            </div>
            <div className="text-start">
              <h2
                className="fw-bold mb-1"
                style={{
                  color: "var(--main-color)",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                Saishnaa Administration Portal
              </h2>
              <p className="text-muted small mb-0">
                Secure local storage dashboard metrics for leads, inquiries, and
                candidate applications.
              </p>
            </div>
          </div>
          <button
            onClick={() => handleExportCSV(activeTab, filteredItems)}
            className="btn btn-purple px-4 py-2.5 rounded-pill d-inline-flex align-items-center gap-2 fw-semibold text-white mt-3 mt-md-0"
          >
            <Download size={16} /> Export to CSV
          </button>
        </div>

        {/* Dashboard Metrics Strip */}
        <div className="row g-4 mb-4">
          <div className="col-lg-3 col-sm-6">
            <div className="glass-panel p-4 rounded-4 shadow-sm bg-white text-start">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted small fw-bold uppercase">
                  Total Inquiries
                </span>
                <Mail className="text-primary" size={20} />
              </div>
              <h3
                className="fw-bold"
                style={{
                  color: "var(--main-color)",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                {inquiries.length}
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="glass-panel p-4 rounded-4 shadow-sm bg-white text-start">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted small fw-bold uppercase">
                  Job Applicants
                </span>
                <Users className="text-success" size={20} />
              </div>
              <h3
                className="fw-bold"
                style={{
                  color: "var(--main-color)",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                {applicants.length}
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="glass-panel p-4 rounded-4 shadow-sm bg-white text-start">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted small fw-bold uppercase">
                  Research Papers
                </span>
                <FileText className="text-warning" size={20} />
              </div>
              <h3
                className="fw-bold"
                style={{
                  color: "var(--main-color)",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                {papers.length}
              </h3>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="glass-panel p-4 rounded-4 shadow-sm bg-white text-start">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted small fw-bold uppercase">
                  Consultation Leads
                </span>
                <CheckCircle className="text-info" size={20} />
              </div>
              <h3
                className="fw-bold"
                style={{
                  color: "var(--main-color)",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                {leads.length}
              </h3>
            </div>
          </div>
        </div>

        {/* Tab Controls & Search Navigation */}
        <div className="row g-3 align-items-center mb-4">
          <div className="col-md-7 d-flex gap-2 flex-wrap">
            <button
              onClick={() => {
                setActiveTab("inquiries");
                setSearchTerm("");
              }}
              className={`btn px-3 py-2 fw-semibold btn-sm ${activeTab === "inquiries" ? "btn-purple text-white" : "btn-outline-purple bg-white text-primary"}`}
              style={{ borderRadius: "20px", transition: "all 0.3s" }}
            >
              ✉ Inquiries ({inquiries.length})
            </button>
            <button
              onClick={() => {
                setActiveTab("applicants");
                setSearchTerm("");
              }}
              className={`btn px-3 py-2 fw-semibold btn-sm ${activeTab === "applicants" ? "btn-purple text-white" : "btn-outline-purple bg-white text-primary"}`}
              style={{ borderRadius: "20px", transition: "all 0.3s" }}
            >
              👥 Applicants ({applicants.length})
            </button>
            <button
              onClick={() => {
                setActiveTab("papers");
                setSearchTerm("");
              }}
              className={`btn px-3 py-2 fw-semibold btn-sm ${activeTab === "papers" ? "btn-purple text-white" : "btn-outline-purple bg-white text-primary"}`}
              style={{ borderRadius: "20px", transition: "all 0.3s" }}
            >
              📄 Manuscripts ({papers.length})
            </button>
            <button
              onClick={() => {
                setActiveTab("leads");
                setSearchTerm("");
              }}
              className={`btn px-3 py-2 fw-semibold btn-sm ${activeTab === "leads" ? "btn-purple text-white" : "btn-outline-purple bg-white text-primary"}`}
              style={{ borderRadius: "20px", transition: "all 0.3s" }}
            >
              📞 Consultation Leads ({leads.length})
            </button>
          </div>

          <div className="col-md-5">
            <div
              className="input-group glass-panel shadow-sm"
              style={{
                borderRadius: "30px",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <span className="input-group-text bg-white border-0 ps-3 text-muted">
                <Search size={18} />
              </span>
              <input
                type="text"
                className="form-control border-0 py-2.5 ps-2"
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ outline: "none", boxShadow: "none" }}
              />
            </div>
          </div>
        </div>

        {/* Data Tables Container */}
        <div
          className="glass-panel p-4 rounded-4 shadow-sm bg-white text-start"
          style={{ overflowX: "auto", border: "1px solid rgba(0,0,0,0.05)" }}
        >
          {filteredItems.length === 0 ? (
            <div className="text-center py-5 text-muted">
              <p className="fs-5 mb-0">
                No records found matching your filters.
              </p>
            </div>
          ) : (
            <table
              className="table table-hover align-middle mb-0"
              style={{ fontSize: "0.9rem" }}
            >
              <thead className="table-light">
                {activeTab === "inquiries" && (
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Channel</th>
                    <th className="text-end">Actions</th>
                  </tr>
                )}
                {activeTab === "applicants" && (
                  <tr>
                    <th>Date</th>
                    <th>Position</th>
                    <th>Name</th>
                    <th>Contact Info</th>
                    <th>Resume</th>
                    <th>Cover msg</th>
                    <th>Channel</th>
                    <th className="text-end">Actions</th>
                  </tr>
                )}
                {activeTab === "papers" && (
                  <tr>
                    <th>Date</th>
                    <th>Journal</th>
                    <th>Author Name</th>
                    <th>Institution & Email</th>
                    <th>Paper Title & Abstract</th>
                    <th>File</th>
                    <th className="text-end">Actions</th>
                  </tr>
                )}
                {activeTab === "leads" && (
                  <tr>
                    <th>Date</th>
                    <th>Lead Contact Email</th>
                    <th className="text-end">Actions</th>
                  </tr>
                )}
              </thead>
              <tbody>
                {activeTab === "inquiries" &&
                  filteredItems.map((item, index) => (
                    <tr key={index}>
                      <td className="text-nowrap small text-muted">
                        <Calendar size={13} className="me-1" />
                        {item.date}
                      </td>
                      <td className="fw-bold">{item.inquiry.name}</td>
                      <td>
                        <a
                          href={`mailto:${item.inquiry.email}`}
                          className="text-decoration-none"
                        >
                          {item.inquiry.email}
                        </a>
                      </td>
                      <td>
                        <span className="badge bg-light text-dark border px-2.5 py-1.5">
                          {item.inquiry.subject}
                        </span>
                      </td>
                      <td
                        style={{
                          maxWidth: "280px",
                          whiteSpace: "normal",
                          wordBreak: "break-word",
                        }}
                      >
                        {item.inquiry.message}
                      </td>
                      <td>
                        <span
                          className={`badge ${item.inquiry.channel === "WhatsApp" ? "bg-success" : "bg-primary"}`}
                        >
                          {item.inquiry.channel}
                        </span>
                      </td>
                      <td className="text-end">
                        <button
                          onClick={() =>
                            handleDeleteItem("saishnaa_inquiries", index)
                          }
                          className="btn btn-outline-danger btn-sm rounded-circle p-2 border-0"
                          title="Delete Inquiry"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}

                {activeTab === "applicants" &&
                  filteredItems.map((item, index) => (
                    <tr key={index}>
                      <td className="text-nowrap small text-muted">
                        <Calendar size={13} className="me-1" />
                        {item.date}
                      </td>
                      <td className="fw-bold text-primary">{item.jobTitle}</td>
                      <td className="fw-bold">{item.applicant.name}</td>
                      <td>
                        <div className="small">
                          <div>
                            Email:{" "}
                            <a href={`mailto:${item.applicant.email}`}>
                              {item.applicant.email}
                            </a>
                          </div>
                          <div>
                            Phone:{" "}
                            <a href={`tel:${item.applicant.phone}`}>
                              {item.applicant.phone}
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-success-subtle text-success border border-success-subtle px-2.5 py-1.5 fw-bold">
                          📄{" "}
                          {item.applicant.resumeName || "uploaded_resume.pdf"}
                        </span>
                      </td>
                      <td
                        style={{
                          maxWidth: "200px",
                          whiteSpace: "normal",
                          wordBreak: "break-word",
                        }}
                      >
                        {item.applicant.cover || "N/A"}
                      </td>
                      <td>
                        <span
                          className={`badge ${item.applicant.channel === "WhatsApp" ? "bg-success" : "bg-primary"}`}
                        >
                          {item.applicant.channel}
                        </span>
                      </td>
                      <td className="text-end">
                        <button
                          onClick={() =>
                            handleDeleteItem("saishnaa_applicants", index)
                          }
                          className="btn btn-outline-danger btn-sm rounded-circle p-2 border-0"
                          title="Delete Applicant"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}

                {activeTab === "papers" &&
                  filteredItems.map((item, index) => (
                    <tr key={index}>
                      <td className="text-nowrap small text-muted">
                        <Calendar size={13} className="me-1" />
                        {item.date}
                      </td>
                      <td>
                        <span className="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle">
                          {item.journalCode}
                        </span>
                      </td>
                      <td className="fw-bold">{item.authorName}</td>
                      <td>
                        <div className="small">
                          <strong>{item.authorInstitution}</strong>
                          <div>
                            <a href={`mailto:${item.authorEmail}`}>
                              {item.authorEmail}
                            </a>
                          </div>
                        </div>
                      </td>
                      <td style={{ maxWidth: "300px" }}>
                        <div className="fw-bold text-dark mb-1">
                          {item.paperTitle}
                        </div>
                        <div
                          className="small text-muted"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item.paperAbstract}
                        </div>
                      </td>
                      <td>
                        <span className="badge bg-secondary-subtle text-secondary border border-secondary-subtle px-2.5 py-1.5">
                          📄 {item.fileName}
                        </span>
                      </td>
                      <td className="text-end">
                        <button
                          onClick={() =>
                            handleDeleteItem("saishnaa_papers", index)
                          }
                          className="btn btn-outline-danger btn-sm rounded-circle p-2 border-0"
                          title="Delete Manuscript"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}

                {activeTab === "leads" &&
                  filteredItems.map((item, index) => (
                    <tr key={index}>
                      <td className="text-nowrap small text-muted">
                        <Calendar size={13} className="me-1" />
                        {item.date}
                      </td>
                      <td className="fw-bold">
                        <a href={`mailto:${item.email}`}>{item.email}</a>
                      </td>
                      <td className="text-end">
                        <button
                          onClick={() =>
                            handleDeleteItem("saishnaa_leads", index)
                          }
                          className="btn btn-outline-danger btn-sm rounded-circle p-2 border-0"
                          title="Delete Lead"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

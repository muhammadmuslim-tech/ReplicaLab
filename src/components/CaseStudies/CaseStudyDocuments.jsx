import "./CaseStudyDocuments.css";

export default function CaseStudyDocuments({ documents }) {
  if (!documents || documents.length === 0) {
    return null;
  }

  return (
    <section className="case-study-documents">

      <div className="case-study-documents-header">

        <span>PROJECT MATERIAL</span>

        <h2>
          Research,
          <br />
          <span>documents & evidence.</span>
        </h2>

      </div>

      <div className="case-study-documents-grid">

        {documents.map((document, index) => {

          const isImage =
            document.type === "IMAGE";

          return (
            <a
              key={`${document.title}-${index}`}
              href={document.file}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-document"
            >

              <div className="case-study-document-top">

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>
                  {document.type}
                </span>

              </div>

              {isImage && (
                <div className="case-study-document-preview">

                  <img
                    src={document.file}
                    alt={document.title}
                  />

                </div>
              )}

              <div className="case-study-document-content">

                <h3>{document.title}</h3>

                <p>{document.description}</p>

              </div>

              <div className="case-study-document-footer">

                <span>
                  {isImage
                    ? "VIEW IMAGE"
                    : "OPEN DOCUMENT"}
                </span>

                <span className="case-study-document-arrow">
                  ↗
                </span>

              </div>

            </a>
          );
        })}

      </div>

    </section>
  );
}
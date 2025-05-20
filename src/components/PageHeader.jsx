export default function PageHeader({ title, breadcrumb, children }) {
    return (
      <div id="pageheader-container" className="flex items-center justify-between p-4">
        <div id="pageheader-left" className="flex flex-col">
          {title && (
            <span id="page-title" className="text-3xl font-semibold">
              {title}
            </span>
          )}
          {breadcrumb && (
            <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
              {typeof breadcrumb === 'string' ? (
                <span id="breadcrumb-current" className="text-gray-500">{breadcrumb}</span>
              ) : Array.isArray(breadcrumb) ? (
                breadcrumb.map((item, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <span id="breadcrumb-separator" className="text-gray-500">/</span>}
                    <span id={`breadcrumb-${index}`} className="text-gray-500">{item}</span>
                  </React.Fragment>
                ))
              ) : null}
            </div>
          )}
        </div>
        {children && <div id="action-button">{children}</div>}
      </div>
    );
  }
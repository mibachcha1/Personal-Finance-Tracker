import React from "react";

const SummarizedView = ({ starting, goal, debt, income, checks }) => {

  const overall = (starting + income - debt).toFixed(3)
  const formattedOverall = Number(overall).toLocaleString(); // Step 3 and 4

  console.log(formattedOverall); // Output: formatted number with two decimals and thousand separators

  const remaining = goal - overall
  const average = Math.round(remaining / (9 - checks))
  const hours = (average / 15.50).toFixed(2)
  return (
    <>
      <div className="mt-5 container">
        <h3 style={{ fontWeight: "800" }}>Summary:</h3>
        <hr />
        <div className="card text-center text-white bg-dark mb-3">
          <div>
            <div className="row" style={{ padding: "25px" }}>
              <div className="col-md-3" style={{ paddingBottom: "10px" }}>
                <div className="card text-white bg-secondary mb-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      Starting Balance
                    </h5>
                    <h5 className="card-text">${starting.toLocaleString()}</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ paddingBottom: "10px" }}>
                <div className="card text-white bg-secondary mb-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      Goal Balance:
                    </h5>
                    <h5 className="card-text">${goal.toLocaleString()}</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ paddingBottom: "10px" }}>
                <div className="card text-white bg-secondary mb-3">
                  <div className="card-body">
                    <h5 className="card-title" >
                      Total Debt:
                    </h5>
                    <h5 className="card-text">${debt.toLocaleString()}</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ paddingBottom: "10px" }}>
                <div className="card text-white bg-secondary mb-3">
                  <div className="card-body">
                    <h5 className="card-title" >
                      Total Income:
                    </h5>
                    <h5 className="card-text">${income.toLocaleString()}</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ paddingBottom: "10px" }}>
                <div className="card text-white bg-secondary mb-3">
                  <div className="card-body">
                    <h5 className="card-title" >
                      Overall Balance:
                    </h5>
                    <h5 className="card-text" style={{ fontWeight: "bold" }}>${formattedOverall}</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ paddingBottom: "10px" }}>
                <div className="card text-white bg-secondary mb-3">
                  <div className="card-body">
                    <h5 className="card-title" >
                      Total Remaining:
                    </h5>
                    <h5 className="card-text" >
                      <h5 className="card-text" style={{ fontWeight: "bold" }}>${remaining.toLocaleString()}</h5>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ paddingBottom: "10px" }}>
                <div className="card text-white bg-secondary mb-3">
                  <div className="card-body">
                    <h5 className="card-title" >
                      Weekly Income Needed
                    </h5>
                    <h5 className="card-text" >
                      <h5 className="card-text" >${average.toLocaleString()}</h5>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ paddingBottom: "10px" }}>
                <div className="card text-white bg-secondary mb-3">
                  <div className="card-body">
                    <h5 className="card-title" >
                      Weekly Hours Needed
                    </h5>
                    <h5 className="card-text" >
                      <h5 className="card-text" >{hours.toLocaleString()}</h5>
                    </h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummarizedView;

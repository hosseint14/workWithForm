import UseBasicFromInput from "../hooks/use-basicFormInput";

const BasicForm = (props) => {
  let validForm = false;

  const {
    value: inputName,
    valueValidation: validName,
    checkValidation: nameHasError,
    valueChangeHandler: nameChangeHandler,
    blurChangeHandler: nameBlurHandler,
    reset: resetNameInput,
  } = UseBasicFromInput((value) => value.trim() !== "");

  const {
    value: inputFamily,
    valueValidation: validFamily,
    checkValidation: familyHasError,
    valueChangeHandler: familyChangeHandler,
    blurChangeHandler: familyBlurHandler,
    reset: resetFamilyInput,
  } = UseBasicFromInput((value) => value.trim() !== "");

  const {
    value: inputEmail,
    valueValidation: validEmail,
    checkValidation: emailHasError,
    valueChangeHandler: emailChangeHandler,
    blurChangeHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = UseBasicFromInput((value) => value.trim() !== "" && value.includes("@"));

  if (validName && validFamily && validEmail) {
    validForm = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!validForm) {
      return;
    }
    
    resetNameInput();
    resetFamilyInput();
    resetEmailInput();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const familyInputClasses = familyHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={inputName}
          />
          {nameHasError && <p className="error-text">enter a valid Name!</p>}
        </div>
        <div className={familyInputClasses}>
          <label htmlFor="family">Last Name</label>
          <input
            type="text"
            id="family"
            onChange={familyChangeHandler}
            onBlur={familyBlurHandler}
            value={inputFamily}
          />
          {familyHasError && (
            <p className="error-text">enter a valid Family!</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="eMail">E-Mail Address</label>
        <input
          type="text"
          id="eMail"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={inputEmail}
        />
        {emailHasError && (
          <p className="error-text">enter a valid E-mail(include @)</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!validForm}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

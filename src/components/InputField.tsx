import {
  forwardRef,
  InputHTMLAttributes,
  ChangeEvent,
  useState,
  useRef,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "./customDatePickerStyles.css";
import "react-calendar/dist/Calendar.css";
import calendar from "../assets/images/calendar.svg";

interface InputFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  id: string;
  label?: string;
  handleInputChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleDeleteValue?: (index: number) => void;
  displayValues?: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "textarea"
    | "search"
    | "datepicker";
  className?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  requested?: boolean;
  value: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onEnterPress?: (value: string) => void;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      id,
      label,
      type = "text",
      className = "",
      required = false,
      error,
      placeholder,
      disabled,
      requested,
      onChange,
      value,
      onEnterPress,
      ...props
    },
    ref
  ) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [date, setDate] = useState<Date | null>(null);
    const datePickerRef = useRef<any>(null);

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setInputValue(e.target.value);
      onChange?.(e);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && onEnterPress) {
        e.preventDefault();
        onEnterPress(value);
      }
    };

    const handleDateChange = (value: Date | null) => {
      setDate(value);
      if (onChange && value) {
        const event = {
          target: { value: value.toISOString(), name: id },
        } as ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    };

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
    const renderInput = () => {
      if (type === "password") {
        return (
          <div className="relative w-full">
            <input
              {...props}
              ref={ref}
              id={id}
              type={passwordVisible ? "text" : "password"}
              placeholder={placeholder}
              required={required}
              disabled={disabled}
              onChange={onChange}
              className={`
          border
          border-stroke
          border-border
          rounded-lg
          w-[500px]
          py-5 px-4
          h-16
          text-border
          font-normal
          text-sm
          leading-tight
          placeholder-placeholder
          focus:outline-none
          focus:shadow-outline
          focus:ring-primary-200
          focus:border-primary-200
          focus:border-2
          ${className}
          ${error ? "border-red-600" : ""}
          `}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-5 top-1/2 pb-4 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {passwordVisible ? (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="text-primary-500"
                />
              ) : (
                <FontAwesomeIcon icon={faEye} className="text-border" />
              )}
            </button>
          </div>
        );
      } else if (type === "search") {
        return (
          <div className="relative w-full">
            <input
              {...props}
              ref={ref}
              id={id}
              type="text"
              placeholder={placeholder}
              required={required}
              disabled={disabled}
              onChange={onChange}
              className={`
            border
            border-stroke
            border-border
            rounded-lg
            w-[500px]
            py-5 pl-6 pr-10
            h-full
            text-border
            font-normal
            text-sm
            leading-tight
            placeholder-placeholder
            focus:outline-none
            focus:shadow-outline
            focus:ring-primary-200
            focus:border-primary-200
            focus:border-2
            ${className}
            ${error ? "border-red-600" : ""}
            `}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-border"
            />
          </div>
        );
      } else if (type === "textarea") {
        return (
          <div className="w-full">
            <textarea
              id={id}
              placeholder={placeholder}
              required={required}
              disabled={disabled}
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className={`
              border
              border-stroke
              border-border
              rounded-xl
              w-[500px]
              py-5 px-4
              h-16
              text-border
              font-normal
              text-sm
              leading-tight
              placeholder-placeholder
              focus:outline-none
              focus:shadow-outline
              focus:ring-primary-200
              focus:border-primary-200
              focus:border-2
              ${className}
              ${error ? "border-red-600" : ""}
                `}
            />
          </div>
        );
      } else if (type === "datepicker") {
        return (
          <div className="relative w-full">
            <DatePicker
              inputRef={datePickerRef}
              id={id}
              value={date}
              required={required}
              disabled={disabled}
              onChange={handleDateChange as any}
              className={`
                border
                border-stroke
                border-border
                rounded-lg
                w-[500px]
                py-5 px-4
                h-16
                text-border
                font-normal
                text-sm
                leading-tight
                placeholder-placeholder
                focus:outline-none
                focus:shadow-outline
                focus:ring-primary-200
                focus:border-primary-200
                focus:border-2
                
                ${className}
                ${error ? "border-red-600" : ""}
              `}
              format="dd-MM-yy"
              clearIcon={null}
              calendarIcon={null}
              isOpen={calendarOpen}
              onCalendarClose={() => setCalendarOpen(false)}
              autoFocus={true}
              dayPlaceholder="dd"
              monthPlaceholder="MM"
              yearPlaceholder="y"
            />
            <div
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setCalendarOpen(!calendarOpen)}
            >
              <img src={calendar} alt="" className="w-3/4" />
            </div>
          </div>
        );
      } else {
        return (
          <input
            {...props}
            ref={ref}
            id={id}
            type={type}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            onChange={onChange}
            className={`
                border
                border-stroke
                border-border
                rounded-xl
                w-[500px]
                py-5 px-4
                h-16
                text-border
                font-normal
                text-sm
                leading-tight
                placeholder-placeholder
                focus:outline-none
                focus:shadow-outline
                focus:ring-primary-200
                focus:border-primary-200
                focus:border-2
                ${className}
                ${error ? "border-red-600" : ""}
                `}
          />
        );
      }
    };
    return (
      <div className={`flex flex-col items-start   ${className}`}>
        <label
          htmlFor={id}
          className={`block text-black font-normal text-sm mb-4 ${className}`}
        >
          {label}
          {requested && (
            <span className="ml-2 text-lg text-primary-400 font-medium">*</span>
          )}
        </label>
        {renderInput()}
        {error && (
          <p className="text-sm text-red-600" id={`${id}-error`}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default InputField;

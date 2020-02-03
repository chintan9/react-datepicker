import "./style.scss";
import "react-datepicker/dist/react-datepicker.css";

import hljs from "highlight.js/lib/highlight";
import hljsJavaScriptLanguage from "highlight.js/lib/languages/javascript";
import React from "react";
import slugify from "slugify";

import CalendarContainer from "../../examples/calendarContainer";
import Children from "../../examples/children";
import ClearInput from "../../examples/clearInput";
import ConfigurePopper from "../../examples/configurePopper";
import CustomCalendarClassName from "../../examples/customCalendarClassName";
import CustomClassName from "../../examples/customClassName";
import CustomDateFormat from "../../examples/customDateFormat";
import CustomDayClassName from "../../examples/customDayClassName";
import CustomInput from "../../examples/customInput";
import CustomTimeClassName from "../../examples/customTimeClassName";
import CustomTimeInput from "../../examples/customTimeInput";
import DateRange from "../../examples/dateRange";
import DateRangeWithShowDisabledNavigation from
    "../../examples/dateRangeWithShowDisabledNavigation";
import Default from "../../examples/default";
import Disabled from "../../examples/disabled";
import DisabledKeyboardNavigation from
    "../../examples/disabledKeyboardNavigation";
import DontCloseOnSelect from "../../examples/dontCloseOnSelect";
import ExcludeDates from "../../examples/excludeDates";
import ExcludeTimePeriod from "../../examples/excludeTimePeriod";
import ExcludeTimes from "../../examples/excludeTimes";
import FilterDates from "../../examples/filterDates";
import FixedCalendar from "../../examples/fixedCalendar";
import HighlightDates from "../../examples/highlightDates";
import HighlightDatesRanges from "../../examples/highlightDatesRanges";
import IncludeDates from "../../examples/includeDates";
import IncludeTimes from "../../examples/includeTimes";
import InjectTimes from "../../examples/injectTimes";
import Inline from "../../examples/inline";
import Locale from "../../examples/locale";
import LocaleWithoutGlobalVariable from
    "../../examples/localeWithoutGlobalVariable";
import LocaleWithTime from "../../examples/localeWithTime";
import MaxDate from "../../examples/maxDate";
import MinDate from "../../examples/minDate";
import MonthDropdown from "../../examples/monthDropdown";
import MonthDropdownShort from "../../examples/monthDropdownShort";
import MonthPicker from "../../examples/monthPicker";
import MonthYearDropdown from "../../examples/monthYearDropdown";
import MultiMonth from "../../examples/multiMonth";
import MultiMonthDropdown from "../../examples/multiMonthDropdown";
import MultiMonthInline from "../../examples/multiMonthInline";
import MultiMonthPrevious from "../../examples/multiMonthPrevious";
import NoAnchorArrow from "../../examples/noAnchorArrow";
import OnBlurCallbacks from "../../examples/onBlurCallbacks";
import OnCalendarChangeStateCallbacks from
    "../../examples/onCalendarOpenStateCallbacks";
import OpenToDate from "../../examples/openToDate";
import PlaceholderText from "../../examples/placeholderText";
import Portal from "../../examples/portal";
import QuarterPicker from "../../examples/quarterPicker";
import RangeMonthPicker from "../../examples/rangeMonthPicker";
import RangeQuarterPicker from "../../examples/rangeQuarterPicker";
import RawChange from "../../examples/rawChange";
import ReadOnly from "../../examples/readOnly";
import RenderCustomDay from "../../examples/renderCustomDay";
import RenderCustomHeader from "../../examples/renderCustomHeader";
import ShowTime from "../../examples/showTime";
import ShowTimeOnly from "../../examples/showTimeOnly";
import SpecificDateRange from "../../examples/specificDateRange";
import StrictParsing from "../../examples/strictParsing";
import TabIndex from "../../examples/tabIndex";
import TimeInput from "../../examples/timeInput";
import Today from "../../examples/today";
import WeekNumbers from "../../examples/weekNumbers";
import YearDropdown from "../../examples/yearDropdown";
import YearSelectDropdown from "../../examples/yearSelectDropdown";
import CodeExampleComponent from "../Example";

export default class exampleComponents extends React.Component {
  componentDidMount() {
    hljs.initHighlightingOnLoad();
    hljs.registerLanguage("javascript", hljsJavaScriptLanguage);
  }

  examples = [
    {title : "Default", component: Default},
    {title : "No Anchor Arrow", component: NoAnchorArrow},
    {title : "Select Time", component: ShowTime},
    {title : "Select Time Only", component: ShowTimeOnly},
    {title : "Exclude Times", component: ExcludeTimes},
    {title : "Include Times", component: IncludeTimes},
    {title : "Inject Specific Times", component: InjectTimes},
    {title : "Specific Time Range", component: ExcludeTimePeriod},
    {title : "Custom date format", component: CustomDateFormat},
    {title : "Custom class name", component: CustomClassName},
    {title : "Custom calendar class name", component: CustomCalendarClassName},
    {title : "Custom day class name", component: CustomDayClassName},
    {title : "Custom time class name", component: CustomTimeClassName},
    {title : "Today button", component: Today},
    {title : "Placeholder text", component: PlaceholderText},
    {title : "Specific date range", component: SpecificDateRange},
    {title : "Min date", component: MinDate},
    {title : "Max date", component: MaxDate},
    {
      title : "Date Range with disabled navigation shown",
      component: DateRangeWithShowDisabledNavigation
    },
    {title : "Locale", component: Locale},
    {title : "Locale with time", component: LocaleWithTime},
    {
      title : "Locale without global variables",
      component: LocaleWithoutGlobalVariable
    },
    {title : "Exclude dates", component: ExcludeDates},
    {title : "Highlight dates", component: HighlightDates},
    {
      title : "Highlight dates with custom class names and ranges",
      component: HighlightDatesRanges
    },
    {title : "Include dates", component: IncludeDates},
    {title : "Filter dates", component: FilterDates},
    {title : "Date Range", component: DateRange},
    {title : "Disable datepicker", component: Disabled},
    {
      title : "Disable keyboard navigation",
      component: DisabledKeyboardNavigation
    },
    {title : "Read only datepicker", component: ReadOnly},
    {title : "Clear datepicker input", component: ClearInput},
    {title : "onBlur callbacks in console", component: OnBlurCallbacks},
    {title : "Configure Popper Properties", component: ConfigurePopper},
    {title : "Portal version", component: Portal},
    {title : "Inline portal version", component: Inline},
    {title : "TabIndex", component: TabIndex},
    {title : "Year dropdown", component: YearDropdown},
    {title : "Month dropdown", component: MonthDropdown},
    {title : "Month dropdown short month", component: MonthDropdownShort},
    {title : "MonthYear dropdown", component: MonthYearDropdown},
    {title : "Year select dropdown", component: YearSelectDropdown},
    {title : "Inline version", component: Inline},
    {title : "Open to date", component: OpenToDate},
    {title : "Fixed height of Calendar", component: FixedCalendar},
    {title : "Display Week Numbers", component: WeekNumbers},
    {title : "Custom input", component: CustomInput},
    {title : "Multiple months", component: MultiMonth},
    {title : "Show previous months", component: MultiMonthPrevious},
    {
      title : "Multiple months with year dropdown",
      component: MultiMonthDropdown
    },
    {title : "Multiple months inline", component: MultiMonthInline},
    {title : "Children", component: Children},
    {title : "Calendar container", component: CalendarContainer},
    {title : "Get raw input value on change", component: RawChange},
    {
      title : "Don't hide calendar on date selection",
      component: DontCloseOnSelect
    },
    {title : "Custom header", component: RenderCustomHeader},
    {title : "Custom Day", component: RenderCustomDay},
    {title : "Input time", component: TimeInput},
    {title : "Strict parsing", component: StrictParsing},
    {title : "Month Picker", component: MonthPicker},
    {title : "Range Month Picker", component: RangeMonthPicker},
    {title : "Quarter Picker", component: QuarterPicker},
    {title : "Range Quarter Picker", component: RangeQuarterPicker},
    {
      title : "Calendar open state callbacks",
      component: OnCalendarChangeStateCallbacks
    },
    {title : "Custom time input", component: CustomTimeInput}
  ];

  render() {
    return (
      <>
        <h1>Examples</h1>
        <ul className="examples__navigation">
          {this.examples.map((example, index) => (
            <li className="examples__navigation-item" key={`link-${index}`}>
              <a href={`#example-${slugify(example.title, { lower: true })}`}>
                {example.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="examples">
          {this.examples.map((example, index) => (
            <CodeExampleComponent key={index} example={
        example} />
          ))}
        </div>
      </>
    );
  }
}

export class TimeUtil {
    static ONE_SECOND_IN_MS = 1000;
    static ONE_MINUTE_IN_MS = 60 * this.ONE_SECOND_IN_MS;
    static ONE_HOUR_IN_MS = 60 * this.ONE_MINUTE_IN_MS;
    static ONE_DAY_IN_MS = 24 * this.ONE_HOUR_IN_MS;
    static ONE_WEEK_IN_MS = 7 * this.ONE_DAY_IN_MS;

    /**
     * Wait the time as delay.
     *
     * @param {number} ms - Waiting time in milliseconds.
     * @returns {void}
     */
    static async delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Compare two dates whether the date1 is former date than the date2.
     *
     * @param {Date} date - Date.
     * @param {Date} compare - Target date to compare (default = now).
     * @returns {boolean} If date is former than compare, returns true. If not, returns false.
     */
    static isFormerDateThan(date: Date, compare: Date = new Date()): boolean {
        return new Date(date).getTime() <= new Date(compare).getTime();
    }

    /**
     * Compare two dates whether the date1 is later date than the date2.
     *
     * @param {Date} date - Date.
     * @param {Date} compare - Target date to compare (default = now).
     * @returns {boolean} If date is later than compare, returns true. If not, returns false.
     */
    static isLaterDateThan(date: Date, compare: Date = new Date()): boolean {
        return new Date(date).getTime() > new Date(compare).getTime();
    }

    /**
     * Check if the two dates are the same.
     *
     * @param {Date} date1 - Comparing date 1.
     * @param {Date} date2 - Comparing date 2.
     * @returns {boolean} True if the two dates are the same, false otherwise.
     */
    static isEqualDate(date1: Date, date2: Date): boolean {
        return new Date(date1).getTime() === new Date(date2).getTime();
    }

    /**
     * Add days to the date.
     *
     * @param date - Standard date.
     * @param days - Adding days.
     * @returns {Date} The date after days from the standard date.
     */
    static addDays(date: Date, days: number): Date {
        return new Date(new Date(date).getTime() + this.ONE_DAY_IN_MS * days);
    }

    /**
     * Check if a date is between the two dates.
     *
     * @param date - Comparing date.
     * @param start - Start date.
     * @param end - End date.
     * @returns {boolean} True if a date is between start and end dates, false otherwise.
     */
    static isBetween(date: Date, start: Date, end: Date): boolean {
        const target = new Date(date).getTime();
        return new Date(start).getTime() <= target && target <= new Date(end).getTime();
    }
}

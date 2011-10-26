/**
 * @class Ext.util.RussianText
 */
Ext.util.RussianText = new (function(){
    /**
     * <p>Get a right string case for number in Russian.</p>
     * <p>Example usage:</p><pre><code>
Ext.util.RussianText(5, ['слово', 'слова', 'слов']);
</code></pre>
     * @param {Int} number Number of  entities
     * @param {Array} cases Various cases for different number
     * @return {String} The string for number in right case.
     */
    this.selectCaseForNumber = function(number, cases){
    	if ((number % 10) == 1 && (number % 100) != 11) {
    		return cases[0];
    	} else if (
    		(number % 10) > 1&& (number % 10) < 5
    		&& (number % 100 < 10 || number % 100 > 20)
    	) {
    		return cases[1];
    	}

    	return cases[2];
    };
})();
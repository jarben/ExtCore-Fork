java -jar JSBuilder2.jar --projectFile ./ext-core.jsb2 --homeDir ./

cat ext-core/ext-core.js | php build/cleanLicense.php > ext-core/clean
cat build/licensesTexts/licenseOriginal.txt ext-core/clean > ext-core.js

cat ext-core/ext-core-debug.js | php build/cleanLicense.php > ext-core/clean
cat build/licensesTexts/licenseOriginal.txt ext-core/clean > ext-core-debug.js

rm -r ext-core

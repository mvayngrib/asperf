
## Usage

run this app on your phone to compare the performance of `AsyncStorage`'s `multiGet([key])` vs `getItem(key)`

the numbers are in millis (lower is better)

Perf on simulator/emulator:
![perf](./perf.png)

Perf on iPhone 6+ release mode (in debug mode there's virtually no advantage to using `multiGet`)
![perf-iphone6plus-release](./perf-iphone6plus-release.png)

Perf on OnePlus 6t release mode:
![perf-oneplus6t-release](./perf-oneplus6t-release.png)

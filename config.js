/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "ko",
	timeFormat: 12,
	units: "metric",

	modules: [
		{
			module: 'MMM-NOAA3',
			position: 'top_right',
			config: {
			        provider: "darksky", // From list above
			        apiKey: "a327b830e556faedadadfaaaa493d2e9",        // From one of the providers listed above
				airKey: "SJ4vezuzmFe5XBZFZ",
				css: "NOAA3",                   // THIS MUST CONTAIN A CSS STYLE NAME 
				userlat: "35.544137", //MUST HAVE BOTH
       				userlon: "129.255832"  //MUST HAVE BOTH
			}
		},
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Suwan's calendar",
			position: "top_left",
			config: {
				calendars: [
					{
//						symbol: "calendar-check-o ",
						url: "https://calendar.google.com/calendar/ical/jsuwan961205%40gmail.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "KBS HOT issue",
						url: "http://world.kbs.co.kr/rss/rss_hotissue.htm?lang=k"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			module: "MMM-Hotword",
			config: {
				record: {
					recordProgram : "arecord",  
					device        : "plughw:1"
				},
				autostart:true,
				onDetected: {
					notification: (payload) => {
					return "ASSISTANT_ACTIVATE"
					},
					payload: (payload) => {
						return {
						  profile: payload.hotword
						}
					}
				},
			},
		},
		{
			module: "MMM-AssistantMk2",
			position: "top_right",
			config: {
//				useWelcomeMessage: "brief today"
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

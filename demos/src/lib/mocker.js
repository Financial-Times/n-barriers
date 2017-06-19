import fetchMock from 'fetch-mock/src/client';
import CorporateOverlay from '../../../main';

export default class Mocker {

	static displayOfBarrier() {
		document.getElementsByTagName('html')[0].dataset.barrierType = 'CORPORATE';
	}

	static mockCorporateBrowsingContextFetch() {
		fetchMock.registerRoute([{
			name: 'corporateBrowsingContext',
			matcher: new CorporateOverlay().config.corporateBrowsingContext.endpoint,
			response: {
				status: 200,
				body: {
					"showAmo": true,
					"acqContext": {
						"id": "acqContext-here",
						"name": "University of East London",
						"displayName": "University Of East London",
						"corporateMessagingEnabled": true
					},
					"viewData": {
						"barrierType": "AMO",
						"barrierAppUrl": "https://subscribe.ft.com",
						"b2cSignUpUrl": "https://subscription.ft.com",
						"loginUrl": "https://accounts.ft.com/login",
						"homePageUrl": "http://www.ft.com",
						"signedIn": false,
						"articleTitle": 'Nigeria’s finance minister makes non-oil revenues top priority',
						"licenceId": "licenceId-here",
						"companyName": "University of East London",
						"subHeading": "University of East London has purchased a group subscription to FT.com.",
						"bodyText": "Join now for free and unlimited access to FT content on your desktop and mobile. Make informed decisions with our trusted source of global market intelligence.",
						"companyLogoUrl": "https://s3-eu-west-1.amazonaws.com/ft-memb-b2b-logo-prod/26a30903-7434-4e11-a8a0-2a632422fa4c.jpeg",
						"signUpButton": {
							"url": "https://join.ft.com/offerId-here"
						},
						"trackingOffers": [
							{
								"offerId": "offerId-here",
								"offerName": "FT.com Premium - RRP",
								"offerType": "RRP",
								"productName": "Premium FT.com"
							},
							{
								"offerId": "offerId-here",
								"offerName": "FT.com Standard - RRP",
								"offerType": "RRP",
								"productName": "Standard FT.com"
							}
						],
						"tracking": "SUBSCRIBE",
						"offersPresented": "%5B%7BofferId%3DofferId-value%2CofferName%3DFT.com+Premium+-+RRP%2CofferType%3DRRP%2CproductName%3DPremium+FT.com%7D%2C%7BofferId%3DofferId-value%2CofferName%3DFT.com+Standard+-+RRP%2CofferType%3DRRP%2CproductName%3DStandard+FT.com%7D%5D"
					},
					"signedIn": false,
					"corporateIp": true,
					"signedUp": false
				}
			}
		}]);
		fetchMock.mock({greed:'none'});
	}


}
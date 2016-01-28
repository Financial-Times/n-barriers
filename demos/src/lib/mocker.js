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
						"id": "a59bf047-1984-4c9c-8a2d-a9e61510f5df",
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
						"licenceId": "5b094968-4536-4363-b4ed-1054fc97041d",
						"companyName": "University of East London",
						"subHeading": "University of East London has purchased a group subscription to FT.com.",
						"bodyText": "Join now for free and unlimited access to FT content on your desktop and mobile. Make informed decisions with our trusted source of global market intelligence.",
						"companyLogoUrl": "https://s3-eu-west-1.amazonaws.com/ft-memb-b2b-logo-prod/26a30903-7434-4e11-a8a0-2a632422fa4c.jpeg",
						"signUpButton": {
							"url": "https://join.ft.com/edeb65c3-3e3a-471c-b67c-2c8f1e030a9a"
						},
						"trackingOffers": [
							{
								"offerId": "713f1e28-0bc5-8261-f1e6-eebab6f7600e",
								"offerName": "FT.com Premium - RRP",
								"offerType": "RRP",
								"productName": "Premium FT.com"
							},
							{
								"offerId": "c8ad55e6-ba74-fea0-f9da-a4546ae2ee23",
								"offerName": "FT.com Standard - RRP",
								"offerType": "RRP",
								"productName": "Standard FT.com"
							}
						],
						"tracking": "SUBSCRIBE",
						"offersPresented": "%5B%7BofferId%3D713f1e28-0bc5-8261-f1e6-eebab6f7600e%2CofferName%3DFT.com+Premium+-+RRP%2CofferType%3DRRP%2CproductName%3DPremium+FT.com%7D%2C%7BofferId%3Dc8ad55e6-ba74-fea0-f9da-a4546ae2ee23%2CofferName%3DFT.com+Standard+-+RRP%2CofferType%3DRRP%2CproductName%3DStandard+FT.com%7D%5D"
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
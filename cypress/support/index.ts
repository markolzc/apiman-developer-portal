// ***********************************************************
// This example support/index.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
/// <reference types="cypress" />
// Import commands.ts using ES2015 syntax:
import './commands';
import { IPolicyCard } from './interfaces/IPolicyCard';
import { IGaugeChart } from './interfaces/IGaugeChart';
import { IApimanData } from '../../src/app/interfaces/ICommunication';

// Alternatively you can use CommonJS syntax:
// require('./commands')

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      waitUntilLoaded(aliases?: string[]): Chainable<Element>;
      checkHeroTitle(title: string, subtitle: string): Chainable<Element>;
      typeLogin(username: string, password: string): Chainable<Element>;
      typeSearch(searchTerm: string): Chainable<Element>;
      navigateToApiDetails(apiId: string): Chainable<Element>;
      updateApimanMetadata(apimanData: IApimanData): Chainable<RequestBody>;
      checkPolicyCard(policyContainderId: string, policyCardInfo: IPolicyCard);
      checkGaugeChart(
        policyContainerId: string,
        gaugeChartId: string,
        gaugeChartInfo: IGaugeChart
      );
      compareWithClipboard(value: string);
      checkTocLength(clientCount: number);
      initApimanData(apimanData: IApimanData);
      retireApi(orgId: string, apiId: string, apiVersion: string);
      deleteApi(orgId: string, apiId: string);
      deleteOrg(orgId: string);
    }
  }
}

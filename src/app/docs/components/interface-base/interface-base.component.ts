import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

import { Subscription } from 'rxjs';

import { DocsService } from '../../services/docs.service';
import { PropertiesColumns } from '../../constants';

/**
 * @ignore
 */
@Component({
  selector: 'docs-interface-base',
  templateUrl: './interface-base.component.html',
  styleUrls: ['../../assets/styles/base-styles.scss']
})
export class DocsInterfaceBaseComponent implements  OnInit, OnDestroy {

  dropdownItems: any = [];
  selectedItem: any;

  rowHeight: string;
  navigation: Subscription;
  target: string;
  targetJSON: any;

  deprecated: boolean = false;
  deprecationMessage: string = '';

  sourceCode: string = '';

  propertiesCaption: string;
  propertiesItems: any = [];
  propertiesColumns: any[] = PropertiesColumns;
  propertiesFooter: boolean;
  propertiesEmptyText: string;
  propertiesSummaryText: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public viewContainer: ViewContainerRef,
    public componentFactoryResolver: ComponentFactoryResolver,
    private docsService: DocsService
  ) {
    this.navigation = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.route.params.subscribe(params => {
          this.target = params['target'];
          this.setInterfaceData();
        });
      }
    });
  }

  ngOnInit() { }

  setInterfaceData() {
    /**
    * Get entire json object for the target component
    */
    this.targetJSON = this.docsService.getInterfaceDataByName(this.target);

    this.deprecated = this.targetJSON.deprecated;
    this.deprecationMessage = this.targetJSON.deprecationMessage;

    this.rowHeight = 'sm';
    /**
    * Properties items table data of documentation tab
    */
     this.propertiesCaption = 'Properties/Methods';
     this.propertiesItems = this.targetJSON.properties;
     this.propertiesFooter = false;
     this.propertiesEmptyText = 'None';
     this.propertiesSummaryText = '';

    /**
    * Data for source code tab
    */
    this.sourceCode = this.targetJSON.sourceCode;
    
  }

  ngOnDestroy() {
    this.navigation.unsubscribe();
  }

}

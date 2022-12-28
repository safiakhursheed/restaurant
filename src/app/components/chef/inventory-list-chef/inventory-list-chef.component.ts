import { Component, OnInit, ViewChild } from '@angular/core';
import {Inventory} from '../../../model/inventory';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { ChefService } from 'src/app/services/chef.service';

declare var $: any;


@Component({
  selector: 'app-inventory-list-chef',
  templateUrl: './inventory-list-chef.component.html',
  styleUrls: ['./inventory-list-chef.component.css']
})
export class InventoryListChefComponent implements OnInit {

  inventoryList: Array<Inventory>;
  dataSource: MatTableDataSource<Inventory> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'amount', 'action'];
  selectedInventory: Inventory = new Inventory();
  errorMessage: string;
  infoMessage: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private chefService: ChefService) { }

  ngOnInit() {
    this.findAllInventories();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllInventories(){
    this.chefService.findAllInventories().subscribe(data => {
      this.inventoryList = data;
      this.dataSource.data = data;
    });
  }

  createNewInventoryRequest(){
    this.selectedInventory= new Inventory();
    $('#inventoryModal').modal('show');
  }

  editInventoryRequest(inventory: Inventory){
    this.selectedInventory = inventory;
    $('#inventoryModal').modal('show');
  }

  saveInventory(){
    if(!this.selectedInventory.id){
      this.createInventory();
    }else{
      this.updateInventory();
    }
  }

  createInventory(){
    this.chefService.createInventory(this.selectedInventory).subscribe(data => {
      this.inventoryList.push(data);
      this.dataSource = new MatTableDataSource(this.inventoryList);
      this.infoMessage = "Mission is completed";
      $('#inventoryModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

  updateInventory(){
    this.chefService.updateInventory(this.selectedInventory).subscribe(data => {
      let itemIndex = this.inventoryList.findIndex(item => item.id == this.selectedInventory.id);
      this.inventoryList[itemIndex] = this.selectedInventory;
      this.dataSource = new MatTableDataSource(this.inventoryList);
      this.infoMessage = "Mission is completed";
      $('#inventoryModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }

  deleteInventoryRequest(inventory: Inventory){
    this.selectedInventory = inventory;
    $('#deleteModal').modal('show');
  }

  deleteInventory(){
    this.chefService.deleteInventory(this.selectedInventory).subscribe(data => {
      let itemIndex = this.inventoryList.findIndex(item => item.id == this.selectedInventory.id);
      if(itemIndex !== -1){
        this.inventoryList.splice(itemIndex, 1);
      }
      this.dataSource = new MatTableDataSource(this.inventoryList);
      this.infoMessage = "Mission is completed";
      $('#deleteModal').modal('hide');
    },err => {
      this.errorMessage = "Unexpected error occurred.";
    });
  }
}
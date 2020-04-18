
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators } from '@angular/forms';
import { AddArtistComponent } from './add-artist/add-artist.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddsongService } from './addsong.service';


@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  add:any;
close:any;
  form:FormGroup;
  submitted=false;
  minDate: Date;
  maxDate: Date;
  top:any;
  
  constructor(public dialog: MatDialog,private addsongService: AddsongService ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 2, 11, 31);
  }
  ngOnInit() {
    this.form=new FormGroup(
      {
        songname:new FormControl("",[Validators.required]),
        date:new FormControl("",[Validators.required]),
        artwork:new FormControl("",[Validators.required]),
        artistName:new FormControl("",[Validators.required])
        
      });
      this.getAnames();
      
  }
OnSubmit(){
  console.log(this.form.value)
  const formData= this.form.value;
  console.log(formData)
  this.postAllData(formData);
}



public hasError = (controlName: string, errorName: string) =>{
  return this.form.controls[controlName].hasError(errorName);
}
openDialog(): void {
  const dialogRef = this.dialog.open(AddArtistComponent, {
    width: '550px',
    
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.close = result;
  });
}



   getAnames(){
     return this.addsongService.getNames().subscribe(res=>{
      this.add=res;
     },
     error=>{
      console.log(this.add);
    }
      
  
    )};
 postAllData(formData: any){

     return this.addsongService.postData(formData).subscribe(
       result=>{
         alert("SUCCESS")
       },
       error=>{
         alert("error")
     console.log(error)
       }
      
     )};
}
import React, {Component} from 'react';

class RegisterForm extends Component {
    render() {
        return(
            <div class="modal fade" id="registerSchedule" tabindex="-1" role="dialog" aria-labelledby="registerScheduleLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="registerScheduleLabel">&#xC77C;&#xC815; &#xB9CC;&#xB4E4;&#xAE30;</h5><button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
                        <form id="registerForm" action="/register" method="post">
                            <div class="modal-body">
                                <div class="form-group"><label class="col-form-label">&#xC77C;&#xC815; &#xC81C;&#xBAA9;</label><input class="form-control" id="title" type="text" name="title" /></div>
                                <div class="form-group"><label class="col-form-label" for="message-text">&#xC77C;&#xC815; &#xC124;&#xBA85;</label><textarea class="form-control" id="description" name="description"></textarea></div>
                                <div class="form-row">
                                    <div class="col-md-6">
                                        <div class="form-group"><label class="col-form-label">&#xC77C;&#xC815; &#xC2DC;&#xC791; &#xB0A0;&#xC9DC;</label>
                                            <div class="input-group date" id="datetimepicker1" data-target-input="nearest"><input class="form-control datetimepicker-input" id="fromDate" type="text" data-target="#datetimepicker1" name="fromDate" />
                                                <div class="input-group-append" data-target="#datetimepicker1" data-toggle="datetimepicker">
                                                    <div class="input-group-text"><i class="material-icons">calendar_today</i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group"><label class="col-form-label">&#xC77C;&#xC815; &#xC2DC;&#xC791; &#xC2DC;&#xAC04;</label>
                                            <div class="input-group date" id="datetimepicker2" data-target-input="nearest"><input class="form-control datetimepicker-input" id="fromTime" type="text" data-target="#datetimepicker2" name="fromTime" />
                                                <div class="input-group-append" data-target="#datetimepicker2" data-toggle="datetimepicker">
                                                    <div class="input-group-text"><i class="material-icons">access_time</i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6">
                                        <div class="form-group"><label class="col-form-label">&#xC77C;&#xC815; &#xC885;&#xB8CC; &#xB0A0;&#xC9DC;</label>
                                            <div class="input-group date" id="datetimepicker3" data-target-input="nearest"><input class="form-control datetimepicker-input" id="toDate" type="text" data-target="#datetimepicker3" name="toDate2" />
                                                <div class="input-group-append" data-target="#datetimepicker3" data-toggle="datetimepicker">
                                                    <div class="input-group-text"><i class="material-icons">calendar_today</i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group"><label class="col-form-label">&#xC77C;&#xC815; &#xC885;&#xB8CC; &#xC2DC;&#xAC04;</label>
                                            <div class="input-group date" id="datetimepicker4" data-target-input="nearest"><input class="form-control datetimepicker-input" id="toTime" type="text" data-target="#datetimepicker4" name="toTime" />
                                                <div class="input-group-append" data-target="#datetimepicker4" data-toggle="datetimepicker">
                                                    <div class="input-group-text"><i class="material-icons">access_time</i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-check form-check-inline"><input class="form-check-input" id="inlineCheckbox1" type="checkbox" value="option1" /><label class="form-check-label" for="inlineCheckbox1">&#xB9E4;&#xC6D4; &#xBC18;&#xBCF5;</label></div>
                                    <div class="form-check form-check-inline"><input class="form-check-input" id="isAllday" type="checkbox" value="true" name="isAllday" /><label class="form-check-label" for="isAllday">&#xD558;&#xB8E8; &#xC885;&#xC77C;</label></div>
                                </div>
                            </div>
                            <div class="modal-footer"><button class="btn btn-secondary" type="button" data-dismiss="modal">&#xCDE8;&#xC18C;</button><button class="btn btn-primary" type="submit">&#xC77C;&#xC815; &#xB9CC;&#xB4E4;&#xAE30;</button></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Schedule;
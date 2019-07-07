(window.deskappJsonp = window.deskappJsonp || []).push([
  [41],
  {
    1000: function(e, t, a) {
      e.exports = {
        assign: 'Assign-module__assign common-module__offSelection',
        arrow: 'Assign-module__arrow',
        agent: 'Assign-module__agent',
        pointer: 'Assign-module__pointer',
        agentname: 'Assign-module__agentname',
        name:
          'Assign-module__name common-module__semibold common-module__ftsmooth common-module__dotted common-module__oflow common-module__ellipsis',
        teamName: 'Assign-module__teamName',
        spnBrckt: 'Assign-module__spnBrckt common-module__ftsmooth',
        groupShareTxt: 'Assign-module__groupShareTxt',
        circle: 'Assign-module__circle',
        dot1: 'Assign-module__dot1',
        dot2: 'Assign-module__dot2',
        dot3: 'Assign-module__dot3',
        lftPanTeam:
          'Assign-module__lftPanTeam common-module__ftsmooth common-module__dotted common-module__oflow common-module__ellipsis'
      };
    },
    1005: function(e, t, a) {
      'use strict';
      a.d(t, 'b', function() {
        return f;
      }),
        a.d(t, 'a', function() {
          return h;
        }),
        a.d(t, 'd', function() {
          return g;
        }),
        a.d(t, 'c', function() {
          return v;
        });
      var n = a(5),
        r = a.n(n),
        i = a(2),
        o = a.n(i),
        s = a(15),
        l = a(6),
        c = a(17),
        u = a(7),
        d = a(3),
        m = a(19),
        p = a.n(m);
      function f(e, t) {
        return {
          types: Object(l.m)('ALL_FIELDS'),
          callAPI: function(a) {
            var n = t || Object(c.r)(a),
              r = t ? 'allDepartment' === t : Object(c.rb)(a),
              i = '/api/v1/departments/' + n + '/fields?module=' + e;
            return (
              (r ||
                'contacts' === e ||
                'calls' === e ||
                'events' === e ||
                'tasks' === e) &&
                (i = '/api/v1/organizationFields?module=' + e),
              Object(s.a)(i, !1, { orgId: a.currentOrgId })
                .get()
                .then(function(t) {
                  var a = Object(u.normalize)(
                    t.data,
                    Object(u.arrayOf)(Object(u.schema)(d.L.FIELD_L))
                  );
                  return {
                    moduleName: e,
                    deptId: n,
                    entities: a.entities,
                    result: a.result
                  };
                })
            );
          }
        };
      }
      function h(e, t) {
        return {
          types: Object(l.m)('FIELD_VALUE'),
          callAPI: function(a) {
            var n = t || Object(c.r)(a),
              r = (t
              ? 'allDepartment' === t
              : Object(c.rb)(a))
                ? '/api/v1/organizationFields/' + e
                : '/api/v1/departments/' + n + '/fields/' + e;
            return Object(s.a)(r, !1, { orgId: a.currentOrgId })
              .get()
              .then(function(e) {
                var t = Object(u.normalize)(e, Object(u.schema)(d.L.FIELD_L));
                return { deptId: n, entities: t.entities, result: t.result };
              });
          }
        };
      }
      function g(e, t) {
        var a = {
          tickets: d.L.TICKET_L,
          tasks: d.L.TASKVIEW_L,
          tags: d.L.TAG_L,
          contacts: d.L.CONTACT_L,
          accounts: d.L.ACCOUNT_L
        };
        return function(n, i) {
          n({ type: 'MASS_UPDATE_FIELDS_REQUEST' });
          var l = i(),
            c = '/api/v1/' + t + '/updateMany';
          return Object(s.a)(c, !1, { orgId: l.currentOrgId })
            .post('', e)
            .then(function(i) {
              var s = {};
              e.ids.map(function(n) {
                e.isCustomField ||
                  (s[n] = o()(
                    {},
                    p()('module[' + a[t] + '][' + n + ']', l),
                    r()({}, e.fieldName, e.fieldValue)
                  ));
              }),
                n({
                  type: 'MASS_UPDATE_FIELDS_SUCCESS',
                  data: {
                    entities: r()({}, a[t], s),
                    fieldObj: r()({}, e.fieldName, e.fieldValue),
                    result: e.ids
                  }
                });
            });
        };
      }
      function v(e) {
        return {
          types: Object(l.m)('ALL_FIELDS'),
          callAPI: function(t) {
            var a = Object(c.r)(t);
            return Object(s.a)('/api/v1/organizationFields?module=' + e, !1, {
              orgId: t.currentOrgId
            })
              .get()
              .then(function(t) {
                var n = Object(u.normalize)(
                  t.data,
                  Object(u.arrayOf)(Object(u.schema)(d.L.FIELD_L))
                );
                return {
                  moduleName: e,
                  deptId: a,
                  entities: n.entities,
                  result: n.result
                };
              });
          }
        };
      }
    },
    1015: function(e, t, a) {
      'use strict';
      var n = a(12),
        r = a.n(n),
        i = a(9),
        o = a.n(i),
        s = a(10),
        l = a.n(s),
        c = a(13),
        u = a.n(c),
        d = a(14),
        m = a.n(d),
        p = a(0),
        f = a.n(p),
        h = a(1),
        g = a.n(h),
        v = a(965),
        b = a.n(v),
        y = a(16),
        _ = (function(e) {
          function t() {
            return (
              o()(this, t),
              u()(this, (t.__proto__ || r()(t)).apply(this, arguments))
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.type,
                    a = e.children,
                    n = e.size,
                    r = (e.dataId, t || (n || ''));
                  return f.a.createElement(
                    y.ResponsiveContainer,
                    {
                      className: b.a[r],
                      alignBox: 'row',
                      align: 'vertical',
                      elementMedia: {}
                    },
                    a && a.isArray
                      ? a.map(function(e, a) {
                          return f.a.createElement(
                            f.a.Fragment,
                            { key: a },
                            f.a.cloneElement(e, { type: t })
                          );
                        })
                      : a
                  );
                }
              }
            ]),
            t
          );
        })(f.a.Component);
      (t.a = _),
        (_.propTypes = {
          children: g.a.node,
          dataId: g.a.string,
          size: g.a.string,
          type: g.a.oneOf(['primary', 'secondary', 'ticketLp'])
        });
    },
    1016: function(e, t, a) {
      'use strict';
      a.d(t, 'b', function() {
        return l;
      }),
        a.d(t, 'a', function() {
          return c;
        });
      var n = a(0),
        r = a.n(n),
        i = a(1),
        o = a.n(i),
        s = a(948),
        l = function(e) {
          var t = e.license,
            a = void 0 === t ? '*' : t,
            n = e.permission;
          return Object(s.licensePermissionCheckHOC)({
            component: { license: a, permission: n }
          });
        },
        c = function(e, t, a) {
          function n(n) {
            var i = [];
            return (
              (i = n.isSpamView ? ['spam'] : []),
              (i = n.isAnonymousView ? i.concat(['anonymous']) : i),
              r.a.createElement(
                s.RestrictionValidator,
                { features: i, module: t, action: a },
                r.a.createElement(e, n)
              )
            );
          }
          return (
            (n.propTypes = { isAnonymousView: o.a.bool, isSpamView: o.a.bool }),
            n
          );
        };
    },
    1020: function(e, t, a) {
      'use strict';
      a.d(t, 'b', function() {
        return x;
      }),
        a.d(t, 'a', function() {
          return N;
        });
      var n = a(2),
        r = a.n(n),
        i = a(12),
        o = a.n(i),
        s = a(9),
        l = a.n(s),
        c = a(10),
        u = a.n(c),
        d = a(13),
        m = a.n(d),
        p = a(14),
        f = a.n(p),
        h = a(0),
        g = a.n(h),
        v = a(1),
        b = a.n(v),
        y = a(32),
        _ = a(26),
        C = a(17),
        A = a(8),
        S = a(1039),
        k = a(1005),
        I = a(24),
        E = a(1016),
        T = (function(e) {
          function t(e) {
            l()(this, t);
            var a = m()(this, (t.__proto__ || o()(t)).call(this, e));
            return (
              (a.state = {
                ignoreFields: {
                  tickets: [
                    'contactId',
                    'productId',
                    'assigneeId',
                    'resolution',
                    'accountId',
                    'description',
                    'phone',
                    'departmentId'
                  ],
                  contacts: [
                    'firstName',
                    'lastName',
                    'accountId',
                    'ownerId',
                    'street',
                    'city',
                    'state',
                    'zip',
                    'country',
                    'description',
                    'twitter',
                    'facebook'
                  ],
                  multipleContacts: [
                    'firstName',
                    'lastName',
                    'accountId',
                    'ownerId',
                    'street',
                    'city',
                    'state',
                    'zip',
                    'country',
                    'description',
                    'twitter',
                    'facebook',
                    'secondaryEmail',
                    'email',
                    'Direction',
                    'Created By',
                    'Modified By'
                  ],
                  accounts: [
                    'ownerId',
                    'description',
                    'code',
                    'state',
                    'city',
                    'street',
                    'annualrevenue',
                    'industry',
                    'fax'
                  ],
                  multipleAccounts: [
                    'ownerId',
                    'description',
                    'code',
                    'state',
                    'city',
                    'street',
                    'annualrevenue',
                    'industry',
                    'fax',
                    'accountName',
                    'email'
                  ],
                  tasks: [
                    'contactId',
                    'ownerId',
                    'description',
                    'departmentId',
                    'ticketId',
                    'absoluteReminderTime',
                    'subject'
                  ],
                  calls: [
                    'Contact Name',
                    'Call Owner',
                    'Description',
                    'Department',
                    'Ticket',
                    'Remind me',
                    'Subject',
                    'Direction',
                    'Created By',
                    'Modified By'
                  ],
                  events: [
                    'Contact Name',
                    'Event Owner',
                    'Description',
                    'Department',
                    'Ticket',
                    'Remind me',
                    'Subject',
                    'Direction',
                    'Created By',
                    'Modified By'
                  ],
                  products: ['description', 'ownerId']
                }
              }),
              (a.onUpdateClick = a.onUpdateClick.bind(a)),
              (a.onFieldChange = a.onFieldChange.bind(a)),
              (a.onSaveClick = a.onSaveClick.bind(a)),
              a
            );
          }
          return (
            f()(t, e),
            u()(t, [
              {
                key: 'onUpdateClick',
                value: function() {
                  var e = this.props,
                    t = e.fields,
                    a = e.getFields,
                    n = e.moduleName,
                    r = e.selectedRecords,
                    i = e.getOrganizationFields;
                  0 === t.length && r.length > 0
                    ? 'tickets' == n
                      ? a(n)
                      : i(n)
                    : r.length < 0 && console.log('please select one record');
                }
              },
              {
                key: 'onSaveClick',
                value: function(e) {
                  var t = this.props,
                    a = t.selectedRecords,
                    n = t.massUpdateFields,
                    i = t.afterUpdate,
                    o = t.moduleName,
                    s = t.showMessage;
                  t.massActionType;
                  n(r()({}, e, { ids: a }), o)
                    .then(function(e) {
                      s({
                        type: 'success',
                        message: A.f.getI18NValue(
                          'crm.massupdate.updatedsuccesfully'
                        )
                      }),
                        i && i();
                    })
                    .catch(function(e) {
                      s({
                        type: 'alert',
                        message: A.f.getI18NValue(
                          'support.unable.to.process.your.request'
                        )
                      });
                    });
                }
              },
              {
                key: 'onFieldChange',
                value: function(e) {
                  var t = this.props,
                    a = (t.fields, t.fieldsObj),
                    n = t.getFieldValue,
                    r = {};
                  this.props.fields.forEach(function(t, n) {
                    e === a[t].name && (r = a[t]);
                  }),
                    ('Picklist' !== r.type && 'Multiselect' !== r.type) ||
                      n(r.id);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.showUpdateIcon,
                    a = void 0 === t || t,
                    n = e.fields,
                    r = e.fieldsObj,
                    i = e.moduleName,
                    o = e.showUpdateText,
                    s = void 0 === o || o,
                    l = e.iconSize,
                    c = e.page,
                    u = e.selectedRecords,
                    d = e.showTitle,
                    m = void 0 === d || d,
                    p = e.massActionType,
                    f = this.state.ignoreFields,
                    h = [];
                  return (
                    (i =
                      u.length > 1 && ('contacts' === i || 'accounts' == i)
                        ? 'contacts' == i
                          ? 'multipleContacts'
                          : 'accounts' == i
                            ? 'multipleAccounts'
                            : i
                        : i),
                    n.forEach(function(e, t) {
                      var a = r[e];
                      -1 === f[i].indexOf(a.name) && h.push(a);
                    }),
                    g.a.createElement(S.a, {
                      fields: h,
                      onUpdateClick: this.onUpdateClick,
                      onFieldChange: this.onFieldChange,
                      onSave: this.onSaveClick,
                      showIcon: a,
                      showUpdateText: s,
                      iconSize: l,
                      page: c,
                      showTitle: m,
                      massActionType: p,
                      dataId: 'fieldUpdate'
                    })
                  );
                }
              }
            ]),
            t
          );
        })(h.Component);
      T.propTypes = {
        afterUpdate: b.a.func,
        dataId: b.a.string,
        fields: b.a.array,
        fieldsObj: b.a.object,
        getFieldValue: b.a.func,
        getFields: b.a.func,
        getOrganizationFields: b.a.object,
        iconSize: b.a.string,
        massActionType: b.a.oneOf('secondary', 'primary', 'TicketLp'),
        massUpdateFields: b.a.func,
        moduleName: b.a.string,
        onCancel: b.a.func,
        onFieldChange: b.a.func,
        onSave: b.a.func,
        onSaveClick: b.a.func,
        page: b.a.page,
        selectedRecords: b.a.array,
        showMessage: b.a.func,
        showTitle: b.a.bool,
        showUpdateIcon: b.a.bool,
        showUpdateText: b.a.bool
      };
      var O = Object(_.connect)(
        function(e, t, a) {
          var n = Object(C.r)(e),
            r = e.departmentSpecificState[n].massUpdateFieldList,
            i = (r && r[t.moduleName]) || [];
          return { fieldsObj: e.module.field || {}, fields: i || [] };
        },
        {
          getFields: k.b,
          getFieldValue: k.a,
          massUpdateFields: k.d,
          getOrganizationFields: k.c,
          showMessage: I.Q
        }
      );
      t.c = Object(y.d)(O)(T);
      var x = Object(y.d)(O, Object(E.b)({ permission: 'contacts_edit' }), E.a)(
          T,
          'contacts',
          'massUpdate'
        ),
        N = Object(y.d)(O, Object(E.b)({ permission: 'accounts_edit' }))(T);
    },
    1025: function(e, t, a) {
      'use strict';
      a.d(t, 'c', function() {
        return n;
      }),
        a.d(t, 'b', function() {
          return r;
        }),
        a.d(t, 'a', function() {
          return i;
        });
      var n = function(e) {
        var t = e.toLowerCase();
        return t.startsWith('http://') || t.startsWith('https://')
          ? t
          : 'http://' + t;
      };
      function r(e) {
        return 10 == e.length
          ? '(' + e.slice(0, 3) + ') ' + e.slice(3, 6) + '-' + e.slice(6, 10)
          : e;
      }
      function i(e, t, a) {
        return (
          void 0 !== a
            ? (e = e + '&' + t + '=' + a)
            : 'limit' == t && (e += '&limit=10'),
          e
        );
      }
    },
    1039: function(e, t, a) {
      'use strict';
      (function(e) {
        var n = a(12),
          r = a.n(n),
          i = a(9),
          o = a.n(i),
          s = a(10),
          l = a.n(s),
          c = a(13),
          u = a.n(c),
          d = a(14),
          m = a.n(d),
          p = a(0),
          f = a.n(p),
          h = a(1),
          g = a.n(h),
          v = a(8),
          b = a(16),
          y = a(1040),
          _ = a.n(y),
          C = a(73),
          A = a.n(C),
          S = a(949),
          k = a.n(S),
          I = a(80),
          E = a.n(I),
          T = a(1041),
          O = a(72),
          x = a.n(O),
          N = a(950),
          L = (function(t) {
            function a(e) {
              o()(this, a);
              var t = u()(this, (a.__proto__ || r()(a)).call(this, e));
              return (
                (t.state = { selectedField: '', selectedFieldValue: '' }),
                (t.handleSave = t.handleSave.bind(t)),
                (t.handleCancel = t.handleCancel.bind(t)),
                (t.handleRemoveClose = t.handleRemoveClose.bind(t)),
                (t.handleTogglePopup = t.handleTogglePopup.bind(t)),
                (t.handleUpdateClick = t.handleUpdateClick.bind(t)),
                (t.handleFieldChange = t.handleFieldChange.bind(t)),
                (t.getSelectedFieldDetails = t.getSelectedFieldDetails.bind(t)),
                (t.handleNewValueChange = t.handleNewValueChange.bind(t)),
                t
              );
            }
            return (
              m()(a, t),
              l()(a, [
                {
                  key: 'componentDidUpdate',
                  value: function(e) {
                    this.props.isPopupOpen !== e.isPopupOpen &&
                      (!this.props.isPopupOpen &&
                        this.setState({
                          selectedField: '',
                          selectedFieldValue: ''
                        }));
                  }
                },
                {
                  key: 'handleSave',
                  value: function(e) {
                    e && e.preventDefault();
                    var t = this.props,
                      a = t.onSave,
                      n = t.togglePopup,
                      r = t.fields,
                      i = this.state,
                      o = i.selectedField,
                      s = i.selectedFieldValue;
                    o = o || (r.length ? r[0].name : '');
                    var l = this.getSelectedFieldDetails(o);
                    (s =
                      s || (l.allowedValues ? l.allowedValues[0].value : '')),
                      'Multiselect' === l.type &&
                        (s = s.filter(function(e) {
                          return '-None-' !== e;
                        })),
                      a({
                        fieldName: o,
                        fieldValue: s,
                        isCustomField: l.isCustomField
                      }),
                      n(e);
                  }
                },
                {
                  key: 'handleUpdateClick',
                  value: function(e) {
                    e && e.preventDefault();
                    var t = this.props,
                      a = t.onUpdateClick,
                      n = t.togglePopup;
                    a && a(), n(e);
                  }
                },
                {
                  key: 'handleCancel',
                  value: function(e) {
                    e && e.preventDefault(), (0, this.props.togglePopup)(e);
                  }
                },
                {
                  key: 'handleFieldChange',
                  value: function(e) {
                    this.setState({ selectedField: e, selectedFieldValue: '' }),
                      this.props.onFieldChange(e);
                  }
                },
                {
                  key: 'handleNewValueChange',
                  value: function(e) {
                    this.setState({ selectedFieldValue: e });
                  }
                },
                {
                  key: 'getSelectedFieldDetails',
                  value: function(e) {
                    var t = this.props.fields;
                    return (
                      ((void 0 === t ? [] : t).filter(function() {
                        var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        return t.name == e;
                      }) || [])[0] || {}
                    );
                  }
                },
                {
                  key: 'handleRemoveClose',
                  value: function(t) {
                    var a = this.props.removeClose;
                    e.closeGroupPopups('fieldUpdateValuePopup'), a(t);
                  }
                },
                {
                  key: 'handleTogglePopup',
                  value: function(t) {
                    (0, this.props.togglePopup)(t, 'bottomRight'),
                      e.closeGroupPopups('fieldUpdateValuePopup');
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.fields,
                      a = void 0 === t ? [] : t,
                      n = e.showUpdateText,
                      r = void 0 === n || n,
                      i = e.page,
                      o = e.dataId,
                      s = (e.showTitle, e.isPopupOpen),
                      l = e.isPopupReady,
                      c = e.position,
                      u = e.getTargetRef,
                      d = e.getContainerRef,
                      m = e.massActionType,
                      p = e.iconSize,
                      h = this.state,
                      g = h.selectedField,
                      y = h.selectedFieldValue;
                    g = g || (a.length ? a[0].name : '');
                    var C = this.getSelectedFieldDetails(g),
                      S = C.maxLength,
                      I = C.type,
                      E = C.allowedValues;
                    return f.a.createElement(
                      b.Box,
                      {
                        onClick: this.handleTogglePopup,
                        eleRef: u,
                        className: _.a.pos,
                        shrink: !0
                      },
                      f.a.createElement(
                        b.Container,
                        null,
                        r &&
                          f.a.createElement(N.a, {
                            icon: 'update',
                            text: v.f.getI18NValue('Update'),
                            iconSize: p,
                            onClick: this.handleUpdateClick,
                            type: m,
                            dataId: o
                          })
                      ),
                      s
                        ? f.a.createElement(
                            x.a,
                            {
                              size: 'xlarge',
                              isAnimate: !0,
                              boxPosition: c,
                              isActive: l,
                              onClick: this.handleRemoveClose,
                              left: 'leftPanelMass' === i ? '-20' : null,
                              getRef: d
                            },
                            f.a.createElement(
                              'div',
                              { className: _.a.fieldTitle },
                              v.f.getI18NValue('support.label.update.field')
                            ),
                            f.a.createElement(
                              'div',
                              { className: _.a.fpopCont },
                              f.a.createElement(
                                'div',
                                { className: _.a.fpopLabelparent },
                                f.a.createElement(
                                  'span',
                                  { className: _.a.fpopLabel },
                                  v.f.getI18NValue(
                                    'crm.massupdate.selectfieldtoupdate'
                                  )
                                ),
                                f.a.createElement(k.a, {
                                  options: a,
                                  selectedValue: g,
                                  valueField: 'name',
                                  textField: 'displayLabel',
                                  onChange: this.handleFieldChange,
                                  needSearch: !0,
                                  emptyMessage: v.f.getI18NValue(
                                    'support.label.no.match.found'
                                  ),
                                  popupGroup: 'fieldUpdateValuePopup',
                                  dataId: 'fieldUpdatePopupSelect'
                                })
                              ),
                              f.a.createElement(
                                'div',
                                { className: _.a.fpopLabelparent },
                                f.a.createElement(
                                  'span',
                                  { className: _.a.fpopLabel },
                                  v.f.getI18NValue('support.label.new.value')
                                ),
                                f.a.createElement(
                                  'div',
                                  { className: _.a.fields },
                                  f.a.createElement(T.a, {
                                    type: I,
                                    onChange: this.handleNewValueChange,
                                    maxLength: S,
                                    value: y,
                                    allowedValues: E,
                                    id: g,
                                    dataId: 'fieldUpdatePopupValue'
                                  })
                                )
                              ),
                              f.a.createElement(
                                'div',
                                { className: _.a.fpopButton },
                                f.a.createElement(A.a, {
                                  text: 'Save',
                                  palette: 'primaryFilled',
                                  size: 'small',
                                  onClick: this.handleSave,
                                  dataId: 'massupdbtn'
                                }),
                                f.a.createElement(
                                  'span',
                                  { className: _.a.fieldButton },
                                  f.a.createElement(A.a, {
                                    text: 'Cancel',
                                    palette: 'secondary',
                                    size: 'small',
                                    onClick: this.handleCancel,
                                    dataId: 'massUpdateCancel'
                                  })
                                )
                              )
                            )
                          )
                        : null
                    );
                  }
                }
              ]),
              a
            );
          })(f.a.Component);
        (L.propTypes = {
          dataId: g.a.string,
          fields: g.a.arrayOf(
            g.a.shape({
              allowedValues: g.a.array,
              displayLabel: g.a.string,
              i18NLabel: g.a.string,
              id: g.a.string,
              isCustomField: g.a.bool,
              maxLength: g.a.number,
              name: g.a.string,
              type: g.a.string
            })
          ),
          getContainerRef: g.a.func,
          getTargetRef: g.a.func,
          iconSize: g.a.string,
          isPopupOpen: g.a.bool,
          isPopupReady: g.a.bool,
          massActionType: g.a.oneOf(['secondary', 'primary', 'TicketLp']),
          onFieldChange: g.a.func,
          onSave: g.a.func,
          onUpdateClick: g.a.func,
          page: g.a.string,
          position: g.a.string,
          removeClose: g.a.func,
          showTitle: g.a.bool,
          showUpdateText: g.a.bool,
          togglePopup: g.a.func
        }),
          (L.defaultProps = {
            massActionType: 'primary',
            iconSize: '14',
            dataId: 'massUpdate'
          }),
          (t.a = E()(L));
      }.call(this, a(68)));
    },
    1040: function(e, t, a) {
      e.exports = {
        fieldTitle:
          'FieldUpdatePopup-module__fieldTitle common-module__dotted common-module__oflow common-module__ellipsis',
        fpopCont: 'FieldUpdatePopup-module__fpopCont',
        hoverAction: 'FieldUpdatePopup-module__hoverAction',
        fpopLabel: 'FieldUpdatePopup-module__fpopLabel',
        fpopLabelparent: 'FieldUpdatePopup-module__fpopLabelparent',
        fpopButton: 'FieldUpdatePopup-module__fpopButton',
        fieldButton: 'FieldUpdatePopup-module__fieldButton',
        fields: 'FieldUpdatePopup-module__fields',
        mactionTxt: 'FieldUpdatePopup-module__mactionTxt',
        pos: 'FieldUpdatePopup-module__pos',
        fpopTitletxt: 'FieldUpdatePopup-module__fpopTitletxt'
      };
    },
    1041: function(e, t, a) {
      'use strict';
      var n = a(12),
        r = a.n(n),
        i = a(9),
        o = a.n(i),
        s = a(10),
        l = a.n(s),
        c = a(13),
        u = a.n(c),
        d = a(14),
        m = a.n(d),
        p = a(0),
        f = a.n(p),
        h = a(1),
        g = a.n(h),
        v = a(947),
        b = a.n(v),
        y = a(99),
        _ = a.n(y),
        C = a(970),
        A = a.n(C),
        S = a(8),
        k = a(949),
        I = a.n(k),
        E = a(203),
        T = a.n(E),
        O = (function(e) {
          function t(e) {
            o()(this, t);
            var a = u()(this, (t.__proto__ || r()(t)).call(this, e));
            return (
              (a.handleInputChange = a.handleInputChange.bind(a)),
              (a.setField = a.setField.bind(a)),
              a
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'handleInputChange',
                value: function(e) {
                  (0, this.props.onChange)(e);
                }
              },
              {
                key: 'setField',
                value: function() {
                  var e = this.props,
                    t = e.value,
                    a = e.allowedValues,
                    n = e.maxLength,
                    r = e.type,
                    i = e.id,
                    o = e.dataId;
                  if ('Picklist' === r)
                    return f.a.createElement(I.a, {
                      onChange: this.handleInputChange,
                      selectedValue: t,
                      options: a,
                      needSearch: !0,
                      textField: 'value',
                      valueField: 'value',
                      emptyMessage: S.f.getI18NValue(
                        'support.label.no.match.found'
                      ),
                      popupGroup: 'fieldUpdatePopupSelect',
                      dataId: o
                    });
                  if ('Boolean' === r)
                    return f.a.createElement(b.a, {
                      checked: t || !1,
                      onChange: this.handleInputChange,
                      id: i || 'fieldCheckbox',
                      dataId: 'fieldUpdateCheckBox'
                    });
                  if ('TextArea' === r) return 'TextArea';
                  if (-1 !== ['Email', 'Number', 'Decimal'].indexOf(r))
                    return f.a.createElement(_.a, {
                      maxLength: '150',
                      onChange: this.handleInputChange,
                      value: t,
                      dataId: 'fieldUpdatePopupValue'
                    });
                  if (-1 !== ['Date', 'DateTime'].indexOf(r)) {
                    var s = 0 === t.length ? null : t,
                      l = 'DateTime' === r;
                    return f.a.createElement(
                      'div',
                      null,
                      f.a.createElement(A.a, {
                        value: s,
                        placeholder: '',
                        onSelect: this.handleInputChange,
                        popupGroup: 'fieldUpdateDateTime',
                        isDateTime: l,
                        dataId: 'fieldUpdateDateTime'
                      })
                    );
                  }
                  if ('Multiselect' === r) {
                    var c = a.map(function(e) {
                      return e.value;
                    });
                    return f.a.createElement(T.a, {
                      onChange: this.handleInputChange,
                      selectedOptions: '' == t ? [] : t,
                      options: c,
                      clearDataTitle: S.f.getI18NValue(
                        'support.label.clear.all'
                      ),
                      emptyMessage: S.f.getI18NValue(
                        'support.label.no.match.found'
                      ),
                      popupGroup: 'fieldUpdateValuePopup'
                    });
                  }
                  return f.a.createElement(_.a, {
                    maxLength: n,
                    onChange: this.handleInputChange,
                    value: t,
                    dataId: 'fieldUpdatePopupValue'
                  });
                }
              },
              {
                key: 'render',
                value: function() {
                  return f.a.createElement('div', null, this.setField());
                }
              }
            ]),
            t
          );
        })(p.Component);
      (t.a = O),
        (O.propTypes = {
          allowedValues: g.a.array,
          dataId: g.a.string,
          id: g.a.string,
          maxLength: g.a.number,
          onChange: g.a.func,
          type: g.a.string,
          value: g.a.string
        }),
        (O.defaultProps = {
          allowedValues: [],
          onChange: function() {},
          value: ''
        });
    },
    1066: function(e, t, a) {
      'use strict';
      a.d(t, 'e', function() {
        return f;
      }),
        a.d(t, 'b', function() {
          return h;
        }),
        a.d(t, 'd', function() {
          return g;
        }),
        a.d(t, 'a', function() {
          return v;
        }),
        a.d(t, 'c', function() {
          return b;
        });
      var n = a(2),
        r = a.n(n),
        i = a(15),
        o = a(6),
        s = a(17),
        l = a(3),
        c = a(181),
        u = a(7),
        d = a(92),
        m = a(93),
        p = a(1025);
      var f = function(e, t, a, n) {
          return {
            types: Object(o.m)('LIST_OFFSET_SCROLL'),
            callAPI: function(n) {
              var o = Object(s.r)(n),
                d = n.departmentSpecificState[o],
                m = a || Object(c.c)(n),
                f = l.k.SCROLL_LIMIT,
                h =
                  d && d.accountList && d.accountList.viewUIState[m]
                    ? d.accountList.viewUIState[m]
                    : {},
                g = (h.pagination, h.list),
                v = e ? g.length + 1 : 1;
              t = t || Object(s.U)(n);
              var b =
                'viewId=' +
                m +
                '&limit=' +
                f +
                '&from=' +
                v +
                '&sortBy=accountName';
              return (
                (b = Object(p.a)(
                  b,
                  'swAccountName',
                  t && 'all' != t.toLowerCase() ? t : void 0
                )),
                Object(i.a)('/api/v1/accounts?' + b, !1, {
                  orgId: n.currentOrgId
                })
                  .get()
                  .then(
                    function(e) {
                      var a = Object(u.normalize)(
                        204 !== e.responseStatus ? e.data : [],
                        Object(u.arrayOf)(Object(u.schema)(l.L.ACCOUNT_L))
                      );
                      return r()({}, a, {
                        deptId: o,
                        viewId: m,
                        fromIndex: v,
                        moduleName: l.L.ACCOUNT_L,
                        filterString: t
                      });
                    },
                    function(e) {
                      throw {
                        status: e.status,
                        statusText: e.statusText,
                        deptId: o,
                        moduleName: l.L.ACCOUNT_L,
                        viewId: m
                      };
                    }
                  )
              );
            },
            payload: function(e) {
              return {
                deptId: Object(s.r)(e),
                viewId: a || Object(c.c)(e),
                moduleName: l.L.ACCOUNT_L,
                isRefresh: n
              };
            }
          };
        },
        h = Object(m.d)(l.L.ACCOUNT),
        g = Object(d.a)(l.L.ACCOUNT),
        v = Object(m.a)(l.L.ACCOUNT),
        b = Object(d.f)(l.L.ACCOUNT);
    },
    1067: function(e, t, a) {
      'use strict';
      a.d(t, 'd', function() {
        return o;
      }),
        a.d(t, 'b', function() {
          return s;
        }),
        a.d(t, 'c', function() {
          return l;
        }),
        a.d(t, 'a', function() {
          return c;
        });
      var n = a(8),
        r = a(19),
        i = a.n(r);
      function o(e, t, a) {
        var r = this.props,
          i = r.showConfirmBox,
          o = r.pushMergeInfo,
          s = r.openLookUp,
          l = r.deptId,
          c = r.selectedItems,
          u = void 0 === c ? [] : c,
          d = r.moduleMeta,
          m = u.length;
        if (m >= 2 && m <= 3)
          s('MergePage'),
            o({
              checkedModuleList: u,
              deptId: l,
              pageInfo: { name: e },
              curModName: t
            });
        else {
          var p = n.f.getI18NValue;
          i({
            type: 'alert',
            submitText: p('crm.button.ok'),
            title: p('support.history.operation.label.wfalert'),
            iconName: 'notifiExclamation',
            message: p(
              m > 3 ? 'crm.alert.maxlength.merge' : 'crm.alert.minlength.merge',
              d[a].pluralLabel
            ),
            isActive: !0,
            palette: 'danger'
          });
        }
      }
      function s(e) {
        var t = '',
          a = '',
          r = [],
          o = '',
          s = '',
          l = {
            tickets: {
              plural: function() {
                (o = 'support.label.alert.ticket.delete.confirm.ack'),
                  (s = t = y.length + ' ' + u.tickets.pluralLabel),
                  r.push(
                    i()('activities.pluralLabel', u) ||
                      i()('tasks.pluralLabel', u)
                  ),
                  r.push(u.timeEntry.pluralLabel),
                  r.push(u.tickets.pluralLabel),
                  (a = _('support.label.alert.delete.tickets.plural', r));
              },
              singular: function() {
                (o = 'support.label.alert.single.ticket.delete.confirm.ack'),
                  (t = '' + u.tickets.singularLabel),
                  (s = y.length + ' ' + u.tickets.singularLabel),
                  r.push(
                    i()('activities.pluralLabel', u) ||
                      i()('tasks.pluralLabel', u)
                  ),
                  r.push(u.timeEntry.pluralLabel),
                  r.push(u.tickets.singularLabel),
                  (a = _('support.label.alert.delete.tickets.singular', r));
              }
            },
            contacts: {
              singular: function() {
                (o = 'support.label.alert.ticket.delete.confirm.ack'),
                  (t = '' + u.contacts.singularLabel),
                  (s = y.length + ' ' + u.contacts.singularLabel),
                  (r = [
                    u.tickets.pluralLabel,
                    u.tasks.pluralLabel,
                    u.timeEntry.pluralLabel,
                    u.contacts.singularLabel
                  ]),
                  (a =
                    _('support.label.alert.delete.contact.singular', r) +
                    ' ' +
                    _(
                      'support.label.alert.delete.contact1',
                      u.contacts.singularLabel
                    ));
              },
              plural: function() {
                (o = 'support.label.alert.ticket.delete.confirm.ack'),
                  (s = t = y.length + ' ' + u.contacts.pluralLabel),
                  (r = [
                    u.tickets.pluralLabel,
                    u.tasks.pluralLabel,
                    u.timeEntry.pluralLabel,
                    u.contacts.pluralLabel
                  ]),
                  (a =
                    _('support.label.alert.delete.contact.plural', r) +
                    ' ' +
                    _(
                      'support.label.alert.delete.contact1',
                      u.contacts.singularLabel
                    ));
              }
            },
            accounts: {
              singular: function() {
                (o = 'support.label.alert.ticket.delete.confirm.ack'),
                  (t = '' + u.accounts.singularLabel),
                  (s = y.length + ' ' + u.accounts.singularLabel),
                  (r = [
                    u.contracts.pluralLabel,
                    u.contacts.pluralLabel,
                    u.tickets.pluralLabel,
                    u.tasks.pluralLabel,
                    u.timeEntry.pluralLabel,
                    u.accounts.singularLabel
                  ]),
                  (a = _('support.label.alert.delete.account.singular', r));
              },
              plural: function() {
                (o = 'support.label.alert.ticket.delete.confirm.ack'),
                  (s = t = y.length + ' ' + u.accounts.pluralLabel),
                  (r = [
                    u.contracts.pluralLabel,
                    u.contacts.pluralLabel,
                    u.tickets.pluralLabel,
                    u.tasks.pluralLabel,
                    u.timeEntry.pluralLabel,
                    u.accounts.pluralLabel
                  ]),
                  (a = _('support.label.alert.delete.account.plural', r));
              }
            },
            products: {
              singular: function() {
                (o = 'support.label.alert.ticket.delete.confirm.ack'),
                  (t = '' + u.products.singularLabel),
                  (s = y.length + ' ' + u.products.singularLabel),
                  (r = [
                    u.tickets.pluralLabel,
                    u.tasks.pluralLabel,
                    u.timeEntry.pluralLabel,
                    u.products.singularLabel
                  ]),
                  (a = _('support.label.alert.delete.contact.singular', r));
              },
              plural: function() {
                (o = 'support.label.alert.ticket.delete.confirm.ack'),
                  (s = t = y.length + ' ' + u.products.pluralLabel),
                  (r = [
                    u.tickets.pluralLabel,
                    u.tasks.pluralLabel,
                    u.timeEntry.pluralLabel,
                    u.products.pluralLabel
                  ]),
                  (a = _('support.label.alert.delete.contact.plural', r));
              }
            }
          },
          c = this.props,
          u = c.moduleMeta,
          d = c.showConfirmBox,
          m = c.deleteItem,
          p = c.showMessage,
          f = c.getOffsetScroll,
          h = c.deSelectAll,
          g = c.selectedItems,
          v = void 0 === g ? [] : g,
          b = c.afterUpdate,
          y = v,
          _ = n.f.getI18NValue,
          C = y.length > 1 ? 'plural' : 'singular';
        l[e][C](),
          d({
            type: 'confirmation',
            submitText: _('support.delete', ''),
            cancelText: _('support.label.cancel'),
            title: _('support.delete', t),
            iconName: 'delete2',
            message: a,
            confirmationMessage: _('support.label.confirm.delete'),
            isActive: !0,
            palette: 'danger'
          }).then(function() {
            return m(y)
              .then(function(e) {
                p({ type: 'success', message: _(o, s) }), h(), b ? b() : f();
              })
              .catch(function() {
                p({
                  type: 'alert',
                  message: _('support.unable.to.process.your.request')
                }),
                  h();
              });
          });
      }
      function l() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'tickets',
          t = this.props,
          a = t.moduleMeta,
          r = t.markSpam,
          i = t.getOffsetScroll,
          o = t.showConfirmBox,
          s = t.isSpamView,
          l = void 0 !== s && s,
          c = t.deSelectAll,
          u = t.selectedItems,
          d = void 0 === u ? [] : u,
          m = t.showMessage,
          p = t.afterUpdate,
          f = '',
          h = [],
          g = n.f.getI18NValue,
          v = d.length > 1,
          b = void 0,
          y = void 0;
        v
          ? ((f = d.length + ' ' + a[e].pluralLabel),
            h.push(a[e].pluralLabel),
            (b = l
              ? 'support.label.unspam.module.confirm.plural'
              : 'support.label.spam.module.confirm.plural'))
          : ((f = a[e].singularLabel),
            h.push(a[e].singularLabel),
            (b = l
              ? 'support.label.unspam.module.confirm.single'
              : 'support.label.spam.module.confirm.single')),
          (y = l ? 'support.label.notspam' : 'support.label.spam'),
          o({
            type: 'confirmation',
            submitText: g('crm.button.ok'),
            cancelText: g('support.label.cancel'),
            title: g(y, f),
            iconName: 'notifiExclamation',
            message: g(b, h),
            isActive: !0,
            palette: 'danger'
          }).then(function() {
            r(d, !l)
              .then(function() {
                m({
                  type: 'success',
                  message: g(
                    v
                      ? 'support.label.alert.ticket.spam.confirm.ack'
                      : 'support.label.alert.single.ticket.spam.confirm.ack',
                    f
                  )
                }),
                  c(),
                  p ? p() : i();
              })
              .catch(function(e) {
                403 === e.status
                  ? o({
                      type: 'alert',
                      submitText: g('crm.button.ok', ''),
                      title: g('support.history.operation.label.wfalert'),
                      iconName: 'notifiExclamation',
                      message: g('support.access.user.error'),
                      isActive: !0,
                      palette: 'danger'
                    })
                  : (m({
                      type: 'alert',
                      message: g('support.unable.to.process.your.request')
                    }),
                    c());
              });
          });
      }
      function c() {
        var e = this.props,
          t = e.moduleMeta,
          a = e.showConfirmBox,
          r = e.massClose,
          i = e.showMessage,
          o = e.getOffsetScroll,
          s = e.deSelectAll,
          l = e.selectedItems,
          c = void 0 === l ? [] : l,
          u = e.afterUpdate,
          d = n.f.getI18NValue,
          m = '',
          p = [],
          f = void 0;
        c.length > 1
          ? ((m = c.length + ' ' + t.tickets.pluralLabel),
            p.push(t.tickets.pluralLabel),
            (f = 'support.label.module.close.confirm.plural'))
          : ((m = t.tickets.singularLabel),
            p.push(t.tickets.singularLabel),
            (f = 'support.label.module.close.confirm.single')),
          a({
            type: 'confirmation',
            submitText: d('crm.button.ok'),
            cancelText: d('support.label.cancel'),
            title: d('support.common.set.close.entity', m),
            iconName: 'notifiExclamation',
            message: d(f, p),
            isActive: !0,
            palette: 'danger'
          }).then(function() {
            return r(c)
              .then(function() {
                i({
                  type: 'info',
                  message: d(
                    c.length > 1
                      ? 'support.label.alert.ticket.close.confirm.ack'
                      : 'support.label.alert.single.ticket.close.confirm.ack',
                    m
                  )
                }),
                  s(),
                  u ? u() : o();
              })
              .catch(function(e) {
                403 === e.status
                  ? a({
                      type: 'alert',
                      submitText: d('crm.button.ok'),
                      title: d('support.history.operation.label.wfalert'),
                      iconName: 'notifiExclamation',
                      message: d('support.access.user.error'),
                      isActive: !0,
                      palette: 'danger'
                    })
                  : (i({
                      type: 'alert',
                      message: d('support.unable.to.process.your.request')
                    }),
                    s());
              });
          });
      }
    },
    1068: function(e, t, a) {
      'use strict';
      a.d(t, 'j', function() {
        return _;
      }),
        a.d(t, 'k', function() {
          return C;
        }),
        a.d(t, 'l', function() {
          return A;
        }),
        a.d(t, 'd', function() {
          return S;
        }),
        a.d(t, 'b', function() {
          return k;
        }),
        a.d(t, 'm', function() {
          return I;
        }),
        a.d(t, 'e', function() {
          return T;
        }),
        a.d(t, 'h', function() {
          return O;
        }),
        a.d(t, 'a', function() {
          return x;
        }),
        a.d(t, 'n', function() {
          return N;
        }),
        a.d(t, 'c', function() {
          return L;
        }),
        a.d(t, 'g', function() {
          return P;
        }),
        a.d(t, 'f', function() {
          return M;
        }),
        a.d(t, 'i', function() {
          return w;
        });
      var n = a(5),
        r = a.n(n),
        i = a(20),
        o = a.n(i),
        s = a(2),
        l = a.n(s),
        c = a(15),
        u = a(6),
        d = a(17),
        m = a(180),
        p = a(3),
        f = a(179),
        h = a(7),
        g = a(46),
        v = a(92),
        b = a(93),
        y = '/api/v1/',
        _ = function(e) {
          return {
            types: Object(u.m)('LIST_OFFSET_SCROLL'),
            callAPI: function(t) {
              var a = Object(d.r)(t),
                n = t.departmentSpecificState[a],
                r = Object(m.e)(t),
                i = p.k.SCROLL_LIMIT,
                o =
                  n && n.taskList && n.taskList.viewUIState[r]
                    ? n.taskList.viewUIState[r]
                    : {},
                s = o.preference,
                u = (o.pagination, o.list),
                f = s || {},
                v = f.sortBy,
                b = f.sorting,
                _ = e ? u.length + 1 : 1,
                C = 'viewId=' + r,
                A = 'from=' + _,
                S = v ? 'sortBy=' + (b ? '' : '-') + v : '',
                k =
                  A +
                  '&limit=' +
                  i +
                  '&' +
                  S +
                  '&' +
                  ('default' === r ? '' : C) +
                  '&' +
                  Object(g.a)(t) +
                  '&include=tickets,assignee';
              return Object(c.a)(y + 'tasks?' + k, !1, {
                orgId: t.currentOrgId
              })
                .get()
                .then(
                  function(e) {
                    var t = Object(h.normalize)(
                      204 !== e.responseStatus ? e.data : [],
                      Object(h.arrayOf)(
                        Object(h.schema)(p.L.TASK_L, {
                          mapping: {
                            ticket: Object(h.schema)(p.L.TICKET_L, {
                              mapping: {
                                contact: Object(h.schema)(p.L.CONTACT_L)
                              }
                            }),
                            assignee: Object(h.schema)(p.L.AGENT_L)
                          }
                        })
                      )
                    );
                    return l()({}, t, {
                      deptId: a,
                      viewId: r,
                      fromIndex: _,
                      moduleName: p.L.TASK_L
                    });
                  },
                  function(e) {
                    throw {
                      status: e.status,
                      statusText: e.statusText,
                      deptId: a,
                      moduleName: p.L.TASK_L,
                      viewId: r
                    };
                  }
                );
            },
            payload: function(e) {
              var t = Object(d.r)(e),
                a = Object(m.e)(e);
              return { deptId: t, viewId: a, moduleName: p.L.TASK_L };
            }
          };
        };
      var C = Object(b.d)(p.L.TASK),
        A = Object(v.f)(p.L.TASK),
        S = Object(v.a)(p.L.TASK),
        k = Object(b.a)(p.L.TASK);
      function I(e, t) {
        return {
          types: Object(u.m)(p.O.TASK_UPDATE),
          callAPI: function(a) {
            return Object(c.a)(y + 'tasks/' + e, !1, { orgId: a.currentOrgId })
              .patch('', t)
              .then(function(t) {
                return 204 !== t.responseStatus
                  ? { module: p.L.TASK_L, id: e, res: t }
                  : {};
              });
          }
        };
      }
      function E(e) {
        var t =
          'NEXT' === e
            ? Object(u.m)('TASK_NEXT_COMMENTS')
            : Object(u.m)('TASK_COMMENTS');
        return function(a, n) {
          return {
            types: t,
            callAPI: function(t) {
              var r = t.taskComments[a] || {},
                i = r.page,
                o = void 0 === i ? 1 : i,
                s = r.comments,
                u = void 0 === s ? [] : s,
                d = r.isNext,
                m =
                  ((o = 'NEXT' === e ? (n ? o : o + 1) : 1) - 1) *
                    f.taskCommentsLimit +
                  1;
              return Object(c.a)(
                '/api/v1/tasks/' +
                  a +
                  '/comments?sortBy=-commentedTime&from=' +
                  (n ? u.length + 1 : m) +
                  '&limit=' +
                  (n ? 1 : f.taskCommentsLimit),
                !1,
                { orgId: t.currentOrgId }
              )
                .get()
                .then(function(e) {
                  return (
                    (d =
                      u.length + (e.data || []).length ===
                      o * f.taskCommentsLimit),
                    l()(
                      {},
                      Object(h.normalize)(
                        204 !== e.responseStatus ? e.data : [],
                        Object(h.arrayOf)(Object(h.schema)('comment'))
                      ),
                      {
                        taskId: a,
                        page: o,
                        isNext: n
                          ? d
                          : (e.data || []).length === f.taskCommentsLimit
                      }
                    )
                  );
                });
            }
          };
        };
      }
      var T = E('CURRENT'),
        O = E('NEXT');
      function x(e, t) {
        return {
          types: Object(u.m)('TASK_COMMENT_ADD'),
          callAPI: function(a) {
            return Object(c.a)('/api/v1/tasks/' + e + '/comments', !1, {
              orgId: a.currentOrgId
            })
              .post('', t)
              .then(function(t) {
                var a = Object(h.normalize)(
                  204 !== t.responseStatus ? [t] : [],
                  Object(h.arrayOf)(Object(h.schema)('comment'))
                );
                return l()({}, a, { taskId: e });
              });
          }
        };
      }
      function N(e, t, a) {
        return {
          types: Object(u.m)('TASK_COMMENT_UPDATE'),
          callAPI: function(n) {
            return Object(c.a)('/api/v1/tasks/' + e + '/comments/' + t, !1, {
              orgId: n.currentOrgId
            })
              .patch('', a)
              .then(function(e) {
                return { module: 'comment', id: t, res: e };
              });
          }
        };
      }
      function L(e, t) {
        return {
          types: Object(u.m)('TASK_COMMENT_DELETE'),
          callAPI: function(a) {
            return Object(c.a)('/api/v1/tasks/' + e + '/comments/' + t, !1, {
              orgId: a.currentOrgId
            })
              .del()
              .then(function(a) {
                return { module: 'comment', id: t, taskId: e, res: a };
              });
          }
        };
      }
      function P() {
        return {
          types: Object(u.m)('TASK_MASSUPDATE_FIELD'),
          shouldCallAPI: function(e) {
            return !o()(e.taskMassUpdateFields).length;
          },
          callAPI: function(e) {
            return Object(c.a)('/api/v1/organizationFields?module=tasks', !1, {
              orgId: e.currentOrgId
            })
              .get()
              .then(function() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return e.data || [];
              });
          }
        };
      }
      function M(e) {
        return {
          types: Object(u.m)('TASK_DETAIL'),
          shouldCallAPI: function() {
            return !!e;
          },
          callAPI: function(t) {
            return Object(c.a)('/api/v1/tasks/' + e + '?include=tickets', !1, {
              orgId: t.currentOrgId
            })
              .get()
              .then(function(e) {
                if (204 !== e.responseStatus)
                  return Object(h.normalize)(
                    e,
                    Object(h.schema)(p.L.TASK_L, {
                      mapping: {
                        ticket: Object(h.schema)(p.L.TICKET_L, {
                          mapping: { contact: Object(h.schema)(p.L.CONTACT_L) }
                        })
                      }
                    })
                  );
              });
          }
        };
      }
      function w(e) {
        return {
          types: Object(u.m)('TASK_STATUSMAPPING'),
          shouldCallAPI: function(t) {
            var a = t.taskStatusMapping;
            return !o()(a[e] || {}).length;
          },
          callAPI: function(t) {
            return Object(c.a)(
              '/api/v1/layouts/' + e + '/taskStatusMappings',
              !1,
              { orgId: t.currentOrgId }
            )
              .get()
              .then(function() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return r()({}, e, t);
              });
          }
        };
      }
    },
    1089: function(e, t, a) {
      'use strict';
      a.d(t, 'a', function() {
        return A;
      });
      var n = a(38),
        r = a.n(n),
        i = a(12),
        o = a.n(i),
        s = a(9),
        l = a.n(s),
        c = a(10),
        u = a.n(c),
        d = a(13),
        m = a.n(d),
        p = a(14),
        f = a.n(p),
        h = a(0),
        g = a.n(h),
        v = a(1),
        b = a.n(v),
        y = a(26),
        _ = a(8),
        C = a(24);
      function A(e, t) {
        return function(a) {
          var n = (function(n) {
            function i(e) {
              l()(this, i);
              var t = m()(this, (i.__proto__ || o()(i)).call(this, e));
              return (
                (t.state = { selectedEntities: [] }),
                (t.onClickCheckbox = t.onClickCheckbox.bind(t)),
                (t.selectAll = t.selectAll.bind(t)),
                (t.deSelectAll = t.deSelectAll.bind(t)),
                t
              );
            }
            return (
              f()(i, n),
              u()(i, [
                {
                  key: 'selectAll',
                  value: function() {
                    if (t) this.setState({ selectedEntities: t(this.props) });
                    else {
                      var a = e(this.props);
                      this.setState({ selectedEntities: a.slice(0, 50) });
                    }
                  }
                },
                {
                  key: 'deSelectAll',
                  value: function() {
                    this.setState({ selectedEntities: [] });
                  }
                },
                {
                  key: 'onClickCheckbox',
                  value: function(e, t) {
                    var a = this.props.showMessage,
                      n = -1 === e.indexOf('_') ? e : e.split('_')[1];
                    this.setState(function(e) {
                      var r = e.selectedEntities.slice();
                      return (
                        t
                          ? -1 === e.selectedEntities.indexOf(n) &&
                            r.length < 50
                            ? r.push(n)
                            : r.length >= 50 &&
                              a({
                                type: 'info',
                                message: _.f.getI18NValue(
                                  'support.select.records.fifty'
                                )
                              })
                          : -1 !== e.selectedEntities.indexOf(n) &&
                            r.splice(r.indexOf(n), 1),
                        { selectedEntities: r }
                      );
                    });
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    var t = this.state.selectedEntities,
                      n = e(this.props).length,
                      i = n < 50 ? n : 50,
                      o = t.length === i,
                      s = [
                        this.state.selectedEntities,
                        this.onClickCheckbox,
                        this.selectAll,
                        this.deSelectAll,
                        o
                      ];
                    return g.a.createElement(
                      a,
                      r()({ listProps: s }, this.props)
                    );
                  }
                }
              ]),
              i
            );
          })(g.a.Component);
          return (
            (n.propTypes = {
              onClickCheckbox: b.a.func,
              showMessage: b.a.func
            }),
            Object(y.connect)(
              function() {
                return {};
              },
              { showMessage: C.Q }
            )(n)
          );
        };
      }
    },
    1166: function(e, t, a) {
      'use strict';
      a.d(t, 'b', function() {
        return c;
      }),
        a.d(t, 'a', function() {
          return u;
        });
      var n = a(2),
        r = a.n(n),
        i = a(7),
        o = a(15),
        s = a(6),
        l = a(3);
      function c() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          t = arguments[1],
          a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : l.T,
          n = arguments[3];
        return {
          types: Object(s.m)(l.L.ROLE),
          callAPI: function(s) {
            var c = 2 * a > 500 ? 500 : 2 * a;
            return Object(o.a)(
              '/api/v1/roles?from=' +
                e +
                '&limit=' +
                c +
                (t ? '&searchStr=*' + t + '*' : '') +
                (n ? '&isVisible=true' : ''),
              !1,
              { orgId: s.currentOrgId }
            )
              .get()
              .then(
                function(n) {
                  return r()(
                    {},
                    Object(i.normalize)(
                      204 !== n.responseStatus ? n.data : [],
                      Object(i.arrayOf)(Object(i.schema)(l.L.ROLE_L))
                    ),
                    {
                      from: e,
                      limit: a,
                      isNext: !!n.data && n.data.length > a,
                      searchStr: t
                    }
                  );
                },
                function(e) {
                  throw e;
                }
              );
          }
        };
      }
      function u(e) {
        return {
          types: Object(s.m)('ROLE'),
          shouldCallAPI: function() {
            return e.length >= 1;
          },
          callAPI: function(t) {
            return Object(o.a)('/api/v1/rolesByIds?roleIds=' + e.join(), !1, {
              orgId: t.currentOrgId
            })
              .get()
              .then(function(e) {
                return Object(
                  i.normalize
                )(204 !== e.responseStatus ? e.data : [], Object(i.arrayOf)(Object(i.schema)(l.L.ROLE_L)));
              });
          }
        };
      }
    },
    1173: function(e, t, a) {
      'use strict';
      a.d(t, 'b', function() {
        return o;
      }),
        a.d(t, 'a', function() {
          return s;
        });
      a(0);
      var n = a(950),
        r = a(948),
        i = function(e) {
          return Object(r.licensePermissionCheckHOC)({
            component: { permission: e + '_delete', license: '*' }
          })(n.a);
        },
        o = i('tickets'),
        s = (i('contacts'), i('accounts'), i('products'));
    },
    1176: function(e, t, a) {
      'use strict';
      a.d(t, 'h', function() {
        return y;
      }),
        a.d(t, 'c', function() {
          return _;
        }),
        a.d(t, 'd', function() {
          return C;
        }),
        a.d(t, 'b', function() {
          return A;
        }),
        a.d(t, 'a', function() {
          return S;
        }),
        a.d(t, 'i', function() {
          return k;
        }),
        a.d(t, 'f', function() {
          return E;
        }),
        a.d(t, 'e', function() {
          return T;
        }),
        a.d(t, 'g', function() {
          return O;
        });
      var n = a(5),
        r = a.n(n),
        i = a(20),
        o = a.n(i),
        s = a(2),
        l = a.n(s),
        c = a(15),
        u = a(6),
        d = a(17),
        m = a(184),
        p = a(3),
        f = (a(179), a(7)),
        h = a(46),
        g = a(92),
        v = a(93),
        b = '/api/v1/',
        y = function(e) {
          return {
            types: Object(u.m)('LIST_OFFSET_SCROLL'),
            callAPI: function(t) {
              var a = Object(d.r)(t),
                n = t.departmentSpecificState[a],
                r = Object(m.b)(t),
                i = p.k.SCROLL_LIMIT,
                o =
                  n && n.eventList && n.eventList.viewUIState[r]
                    ? n.eventList.viewUIState[r]
                    : {},
                s = o.preference,
                u = (o.pagination, o.list),
                g = s || {},
                v = g.sortBy,
                y = g.sorting,
                _ = e ? u.length + 1 : 1,
                C = 'viewId=' + r,
                A = 'from=' + _,
                S = v ? 'sortBy=' + (y ? '' : '-') + v : '',
                k =
                  A +
                  '&limit=' +
                  i +
                  '&' +
                  S +
                  '&' +
                  ('default' === r ? '' : C) +
                  '&' +
                  Object(h.a)(t) +
                  '&include=tickets';
              return Object(c.a)(b + 'events?' + k, !1, {
                orgId: t.currentOrgId
              })
                .get()
                .then(
                  function(e) {
                    var t = Object(f.normalize)(
                      204 !== e.responseStatus ? e.data : [],
                      Object(f.arrayOf)(
                        Object(f.schema)(p.L.EVENT_L, {
                          mapping: {
                            ticket: Object(f.schema)(p.L.TICKET_L, {
                              mapping: {
                                contact: Object(f.schema)(p.L.CONTACT_L)
                              }
                            }),
                            assignee: Object(f.schema)(p.L.AGENT_L)
                          }
                        })
                      )
                    );
                    return l()({}, t, {
                      deptId: a,
                      viewId: r,
                      fromIndex: _,
                      moduleName: p.L.EVENT_L
                    });
                  },
                  function(e) {
                    throw {
                      status: e.status,
                      statusText: e.statusText,
                      deptId: a,
                      moduleName: p.L.EVENT_L,
                      viewId: r
                    };
                  }
                );
            },
            payload: function(e) {
              var t = Object(d.r)(e),
                a = Object(m.b)(e);
              return { deptId: t, viewId: a, moduleName: p.L.EVENT_L };
            }
          };
        };
      var _ = Object(v.d)(p.L.EVENT),
        C = Object(g.f)(p.L.EVENT),
        A = Object(g.a)(p.L.EVENT),
        S = Object(v.a)(p.L.EVENT);
      function k(e, t) {
        return {
          types: Object(u.m)(p.O.EVENT_UPDATE),
          callAPI: function(a) {
            return Object(c.a)(b + 'events/' + e, !1, { orgId: a.currentOrgId })
              .patch('', t)
              .then(function(t) {
                return 204 !== t.responseStatus
                  ? { module: p.L.EVENT_L, id: e, res: t }
                  : {};
              });
          }
        };
      }
      function I(e) {
        var t =
          'NEXT' === e
            ? Object(u.m)('EVENT_NEXT_COMMENTS')
            : Object(u.m)('EVENT_COMMENTS');
        return function(a, n) {
          return {
            types: t,
            callAPI: function(t) {
              var r = t.eventComments[a] || {},
                i = r.page,
                o = void 0 === i ? 1 : i,
                s = r.comments,
                u = void 0 === s ? [] : s,
                d = r.isNext,
                m =
                  ((o = 'NEXT' === e ? (n ? o : o + 1) : 1) - 1) *
                    eventCommentsLimit +
                  1;
              return Object(c.a)(
                '/api/v1/events/' +
                  a +
                  '/comments?sortBy=-commentedTime&from=' +
                  (n ? u.length + 1 : m) +
                  '&limit=' +
                  (n ? 1 : eventCommentsLimit),
                !1,
                { orgId: t.currentOrgId }
              )
                .get()
                .then(function(e) {
                  return (
                    (d =
                      u.length + (e.data || []).length ===
                      o * eventCommentsLimit),
                    l()(
                      {},
                      Object(f.normalize)(
                        204 !== e.responseStatus ? e.data : [],
                        Object(f.arrayOf)(Object(f.schema)('comment'))
                      ),
                      {
                        eventId: a,
                        page: o,
                        isNext: n
                          ? d
                          : (e.data || []).length === eventCommentsLimit
                      }
                    )
                  );
                });
            }
          };
        };
      }
      I('CURRENT'), I('NEXT');
      function E() {
        return {
          types: Object(u.m)('EVENT_MASSUPDATE_FIELD'),
          shouldCallAPI: function(e) {
            return !o()(e.eventMassUpdateFields).length;
          },
          callAPI: function(e) {
            return Object(c.a)('/api/v1/organizationFields?module=events', !1, {
              orgId: e.currentOrgId
            })
              .get()
              .then(function() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return e.data || [];
              });
          }
        };
      }
      function T(e) {
        return {
          types: Object(u.m)('EVENT_DETAIL'),
          shouldCallAPI: function() {
            return !!e;
          },
          callAPI: function(t) {
            return Object(c.a)('/api/v1/events/' + e + '?include=tickets', !1, {
              orgId: t.currentOrgId
            })
              .get()
              .then(function(e) {
                if (204 !== e.responseStatus)
                  return Object(f.normalize)(
                    e,
                    Object(f.schema)(p.L.EVENT_L, {
                      mapping: {
                        ticket: Object(f.schema)(p.L.TICKET_L, {
                          mapping: { contact: Object(f.schema)(p.L.CONTACT_L) }
                        })
                      }
                    })
                  );
              });
          }
        };
      }
      function O(e) {
        return {
          types: Object(u.m)('EVENT_STATUSMAPPING'),
          shouldCallAPI: function(t) {
            var a = t.eventStatusMapping;
            return !o()(a[e] || {}).length;
          },
          callAPI: function(t) {
            return Object(c.a)(
              '/api/v1/layouts/' + e + '/eventStatusMappings',
              !1,
              { orgId: t.currentOrgId }
            )
              .get()
              .then(function() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return r()({}, e, t);
              });
          }
        };
      }
    },
    121: function(e, t, a) {
      'use strict';
      var n = a(12),
        r = a.n(n),
        i = a(9),
        o = a.n(i),
        s = a(10),
        l = a.n(s),
        c = a(13),
        u = a.n(c),
        d = a(14),
        m = a.n(d),
        p = a(0),
        f = a.n(p),
        h = a(1),
        g = a.n(h),
        v = a(178),
        b = a.n(v),
        y = a(16),
        _ = a(233),
        C = a.n(_),
        A = (function(e) {
          function t() {
            return (
              o()(this, t),
              u()(this, (t.__proto__ || r()(t)).apply(this, arguments))
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.view,
                    a = e.size;
                  return f.a.createElement(
                    y.Container,
                    { alignBox: 'column', className: b.a[t], isCover: !1 },
                    f.a.createElement(
                      y.Box,
                      { className: b.a.stencilSec },
                      f.a.createElement(
                        y.Container,
                        { alignBox: 'row', className: b.a.stencil },
                        f.a.createElement(
                          y.Box,
                          { className: b.a.lft },
                          f.a.createElement(C.a, {
                            shape: 'circle',
                            size: a,
                            palette: 'primary'
                          })
                        ),
                        f.a.createElement(
                          y.Box,
                          { flexible: !0, className: b.a.middle },
                          f.a.createElement(C.a, {
                            size: 'default',
                            palette: 'primary'
                          }),
                          f.a.createElement(
                            'span',
                            { className: b.a.secondLIne },
                            f.a.createElement(C.a, {
                              size: 'default',
                              palette: 'primary'
                            })
                          )
                        ),
                        f.a.createElement(
                          y.Box,
                          { className: b.a.rgt },
                          f.a.createElement(C.a, {
                            shape: 'circle',
                            size: a,
                            palette: 'primary'
                          })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(f.a.Component);
      (t.a = A),
        (A.propTypes = {
          size: g.a.string,
          view: g.a.oneOf(['classic', 'gridview'])
        }),
        (A.defaultProps = { view: 'classic' });
    },
    1212: function(e, t, a) {
      'use strict';
      a.d(t, 'f', function() {
        return y;
      }),
        a.d(t, 'a', function() {
          return _;
        }),
        a.d(t, 'b', function() {
          return C;
        }),
        a.d(t, 'd', function() {
          return A;
        }),
        a.d(t, 'c', function() {
          return S;
        }),
        a.d(t, 'g', function() {
          return k;
        }),
        a.d(t, 'e', function() {
          return E;
        });
      var n = a(5),
        r = a.n(n),
        i = a(20),
        o = a.n(i),
        s = a(2),
        l = a.n(s),
        c = a(15),
        u = a(6),
        d = a(17),
        m = a(186),
        p = a(3),
        f = (a(179), a(7)),
        h = a(46),
        g = a(92),
        v = a(93),
        b = '/api/v1/',
        y = function(e) {
          return {
            types: Object(u.m)('LIST_OFFSET_SCROLL'),
            callAPI: function(t) {
              var a = Object(d.r)(t),
                n = t.departmentSpecificState[a],
                r = Object(m.b)(t),
                i = p.k.SCROLL_LIMIT,
                o =
                  n && n.callList && n.callList.viewUIState[r]
                    ? n.callList.viewUIState[r]
                    : {},
                s = o.preference,
                u = (o.pagination, o.list),
                g = s || {},
                v = g.sortBy,
                y = g.sorting,
                _ = e ? u.length + 1 : 1,
                C = 'viewId=' + r,
                A = 'from=' + _,
                S = v ? 'sortBy=' + (y ? '' : '-') + v : '',
                k =
                  A +
                  '&limit=' +
                  i +
                  '&' +
                  S +
                  '&' +
                  ('default' === r ? ' ' : C) +
                  '&' +
                  Object(h.a)(t) +
                  '&include=tickets';
              return Object(c.a)(b + 'calls?' + k, !1, {
                orgId: t.currentOrgId
              })
                .get()
                .then(
                  function(e) {
                    var t = Object(f.normalize)(
                      204 !== e.responseStatus ? e.data : [],
                      Object(f.arrayOf)(
                        Object(f.schema)(p.L.CALL_L, {
                          mapping: {
                            ticket: Object(f.schema)(p.L.TICKET_L, {
                              mapping: {
                                contact: Object(f.schema)(p.L.CONTACT_L)
                              }
                            }),
                            assignee: Object(f.schema)(p.L.AGENT_L)
                          }
                        })
                      )
                    );
                    return l()({}, t, {
                      deptId: a,
                      viewId: r,
                      fromIndex: _,
                      moduleName: p.L.CALL_L
                    });
                  },
                  function(e) {
                    throw {
                      status: e.status,
                      statusText: e.statusText,
                      deptId: a,
                      moduleName: p.L.CALL_L,
                      viewId: r
                    };
                  }
                );
            },
            payload: function(e) {
              var t = Object(d.r)(e),
                a = Object(m.b)(e);
              return { deptId: t, viewId: a, moduleName: p.L.CALL_L };
            }
          };
        };
      var _ = Object(v.d)(p.L.CALL),
        C = Object(g.f)(p.L.CALL),
        A = Object(g.a)(p.L.CALL),
        S = Object(v.a)(p.L.CALL);
      function k(e, t) {
        return {
          types: Object(u.m)(p.O.CALL_UPDATE),
          callAPI: function(a) {
            return Object(c.a)(b + 'calls/' + e, !1, { orgId: a.currentOrgId })
              .patch('', t)
              .then(function(t) {
                return 204 !== t.responseStatus
                  ? { module: p.L.CALL_L, id: e, res: t }
                  : {};
              });
          }
        };
      }
      function I(e) {
        var t =
          'NEXT' === e
            ? Object(u.m)('CALL_NEXT_COMMENTS')
            : Object(u.m)('CALL_COMMENTS');
        return function(a, n) {
          return {
            types: t,
            callAPI: function(t) {
              var r = t.callComments[a] || {},
                i = r.page,
                o = void 0 === i ? 1 : i,
                s = r.comments,
                u = void 0 === s ? [] : s,
                d = r.isNext,
                m =
                  ((o = 'NEXT' === e ? (n ? o : o + 1) : 1) - 1) *
                    callCommentsLimit +
                  1;
              return Object(c.a)(
                '/api/v1/calls/' +
                  a +
                  '/comments?sortBy=-commentedTime&from=' +
                  (n ? u.length + 1 : m) +
                  '&limit=' +
                  (n ? 1 : callCommentsLimit),
                !1,
                { orgId: t.currentOrgId }
              )
                .get()
                .then(function(e) {
                  return (
                    (d =
                      u.length + (e.data || []).length ===
                      o * callCommentsLimit),
                    l()(
                      {},
                      Object(f.normalize)(
                        204 !== e.responseStatus ? e.data : [],
                        Object(f.arrayOf)(Object(f.schema)('comment'))
                      ),
                      {
                        callId: a,
                        page: o,
                        isNext: n
                          ? d
                          : (e.data || []).length === callCommentsLimit
                      }
                    )
                  );
                });
            }
          };
        };
      }
      I('CURRENT'), I('NEXT');
      function E(e) {
        return {
          types: Object(u.m)('CALL_STATUSMAPPING'),
          shouldCallAPI: function(t) {
            var a = t.callStatusMapping;
            return !o()(a[e] || {}).length;
          },
          callAPI: function(t) {
            return Object(c.a)(
              '/api/v1/layouts/' + e + '/callStatusMappings',
              !1,
              { orgId: t.currentOrgId }
            )
              .get()
              .then(function() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return r()({}, e, t);
              });
          }
        };
      }
    },
    1224: function(e, t, a) {
      'use strict';
      a.d(t, 'g', function() {
        return u;
      }),
        a.d(t, 'c', function() {
          return d;
        }),
        a.d(t, 'a', function() {
          return m;
        }),
        a.d(t, 'f', function() {
          return p;
        }),
        a.d(t, 'b', function() {
          return f;
        }),
        a.d(t, 'd', function() {
          return h;
        }),
        a.d(t, 'e', function() {
          return g;
        });
      var n = a(0),
        r = a.n(n),
        i = a(1),
        o = a.n(i),
        s = a(948),
        l = function(e) {
          e.updateClass;
          var t = e.updatePopup;
          return r.a.createElement(r.a.Fragment, null, t);
        };
      function c(e) {
        return Object(s.licensePermissionCheckHOC)({
          component: { license: '*', permission: e + '_edit' }
        })(l);
      }
      l.propTypes = { updateClass: o.a.string, updatePopup: o.a.element };
      var u = c('tickets'),
        d = c('contacts'),
        m = c('accounts'),
        p = c('tasks'),
        f = c('calls'),
        h = c('events'),
        g = c('products');
    },
    1239: function(e, t, a) {
      'use strict';
      a.d(t, 'c', function() {
        return i;
      }),
        a.d(t, 'b', function() {
          return o;
        }),
        a.d(t, 'a', function() {
          return s;
        });
      a(0);
      var n = a(950),
        r = a(1016),
        i = Object(r.b)({ permission: 'tickets_mergeTickets' })(n.a),
        o = Object(r.b)({ permission: 'contacts_edit' })(n.a),
        s = Object(r.b)({ permission: 'accounts_edit' })(n.a);
    },
    1270: function(e, t, a) {
      'use strict';
      a.d(t, 'a', function() {
        return b;
      });
      var n = a(38),
        r = a.n(n),
        i = a(12),
        o = a.n(i),
        s = a(9),
        l = a.n(s),
        c = a(10),
        u = a.n(c),
        d = a(13),
        m = a.n(d),
        p = a(14),
        f = a.n(p),
        h = a(0),
        g = a.n(h),
        v = (a(1), a(19), a(1271));
      function b() {
        return function(e) {
          return (function(t) {
            function a(e) {
              l()(this, a);
              var t = m()(this, (a.__proto__ || o()(a)).call(this, e));
              return (
                (t.state = { showMessage: !1 }),
                (t.getMessage = t.getMessage.bind(t)),
                (t.toggleMessage = t.toggleMessage.bind(t)),
                (t.enableMessage = t.toggleMessage.bind(t, !0)),
                (t.disableMessage = t.toggleMessage.bind(t, !1)),
                t
              );
            }
            return (
              f()(a, t),
              u()(a, [
                {
                  key: 'toggleMessage',
                  value: function(e) {
                    this.setState({ showMessage: e });
                  }
                },
                {
                  key: 'getMessage',
                  value: function(e) {
                    return (
                      this.state.showMessage &&
                      g.a.createElement(v.a, { onRefreshClick: e })
                    );
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    return g.a.createElement(
                      e,
                      r()(
                        {
                          getMessage: this.getMessage,
                          enableMessage: this.enableMessage,
                          disableMessage: this.disableMessage
                        },
                        this.props
                      )
                    );
                  }
                }
              ]),
              a
            );
          })(g.a.Component);
        };
      }
    },
    1271: function(e, t, a) {
      'use strict';
      var n = a(12),
        r = a.n(n),
        i = a(9),
        o = a.n(i),
        s = a(10),
        l = a.n(s),
        c = a(13),
        u = a.n(c),
        d = a(14),
        m = a.n(d),
        p = a(0),
        f = a.n(p),
        h = a(1),
        g = a.n(h),
        v = a(1334),
        b = a.n(v),
        y = a(8),
        _ = a(1335),
        C = a.n(_),
        A = a(30),
        S = a(109),
        k = (function(e) {
          function t() {
            return (
              o()(this, t),
              u()(this, (t.__proto__ || r()(t)).apply(this, arguments))
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.onClick,
                    a = e.text;
                  return f.a.createElement(
                    S.a,
                    {
                      href: 'javascript:;',
                      onClick: t,
                      className: C.a.text,
                      dataTestid: 'massActionRefresh'
                    },
                    f.a.createElement(A.KnowledgeBaseFontIcon, {
                      name: 'kbUiRefresh',
                      size: '15',
                      iconClass: C.a.icon
                    }),
                    a
                  );
                }
              }
            ]),
            t
          );
        })(f.a.Component),
        I = k;
      k.propTypes = { onClick: g.a.func, text: g.a.string };
      var E = (function(e) {
        function t() {
          return (
            o()(this, t),
            u()(this, (t.__proto__ || r()(t)).apply(this, arguments))
          );
        }
        return (
          m()(t, e),
          l()(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props.onRefreshClick,
                  t = y.f.getI18NValue,
                  a = t('crm.button.refresh'),
                  n = t('support.label.search.result.modified');
                return f.a.createElement(
                  'div',
                  { className: b.a.container, 'data-id': 'massActionMessage' },
                  f.a.createElement('span', { 'data-id': 'massActionText' }, n),
                  f.a.createElement(I, { text: a, onClick: e })
                );
              }
            }
          ]),
          t
        );
      })(f.a.Component);
      t.a = E;
      E.propTypes = { onRefreshClick: g.a.func };
    },
    1311: function(e, t, a) {
      'use strict';
      var n = a(12),
        r = a.n(n),
        i = a(9),
        o = a.n(i),
        s = a(10),
        l = a.n(s),
        c = a(13),
        u = a.n(c),
        d = a(14),
        m = a.n(d),
        p = a(0),
        f = a.n(p),
        h = a(1),
        g = a.n(h),
        v = a(26),
        b = a(1068),
        y = a(1212),
        _ = a(1176),
        C = a(24),
        A = a(8),
        S = a(1015),
        k = a(950),
        I = a(1020),
        E = (function(e) {
          function t(e) {
            o()(this, t);
            var a = u()(this, (t.__proto__ || r()(t)).call(this, e));
            return (
              (a.onMassDelete = a.onMassDelete.bind(a)),
              (a.onMassUpdate = a.onMassUpdate.bind(a)),
              (a.onChangeOwner = a.onChangeOwner.bind(a)),
              (a.handleDelete = a.handleDelete.bind(a)),
              a
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'onMassDelete',
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.selectedTasks,
                    n = (t.deSelectAll, t.deleteTask),
                    r = t.deleteEvent,
                    i = t.deleteCall,
                    o = t.showConfirmBox,
                    s = t.activityModuleName,
                    l = t.moduleName,
                    c = s.singularLabel,
                    u = s.pluralLabel,
                    d = A.f.getI18NValue,
                    m =
                      a.length > 1
                        ? d('support.delete.with.chkLen', [a.length, u])
                        : d('support.delete', c);
                  o({
                    type: 'delete',
                    submitText: d('support.permission.delete.comment'),
                    cancelText: d('support.label.cancel'),
                    title: m,
                    message: d(
                      'support.remote.authentication.disable.confirmmsg'
                    ),
                    isActive: !0,
                    palette: 'danger'
                  }).then(function(t) {
                    'calls' === l
                      ? e.handleDelete(i, a)
                      : 'tasks' === l
                        ? e.handleDelete(n, a)
                        : 'events' === l && e.handleDelete(r, a);
                  });
                }
              },
              {
                key: 'handleDelete',
                value: function(e, t) {
                  var a = this,
                    n = this.props,
                    r = n.activityModuleName,
                    i = n.showMessage,
                    o = n.deSelectAll,
                    s = A.f.getI18NValue,
                    l = r.singularLabel,
                    c = r.pluralLabel;
                  e(t).then(
                    function() {
                      t.length && a.setState({ selectedTasks: [] });
                      var e =
                        t.length > 1
                          ? s('support.label.massdelete.many', [t.length, c])
                          : s('support.label.massdelete.one', [t.length, l]);
                      i({ type: 'success', message: e }),
                        o(),
                        isNext && getTasksOffsetScroll(!0);
                    },
                    function() {
                      a.handleError(), o();
                    }
                  );
                }
              },
              {
                key: 'onMassUpdate',
                value: function() {
                  var e = this.props;
                  e.selectedTasks, e.deSelectAll;
                }
              },
              {
                key: 'onChangeOwner',
                value: function() {
                  var e = this.props;
                  e.selectedTasks, e.deSelectAll;
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.selectedTasks,
                    a = e.moduleName,
                    n = e.count,
                    r = e.deSelectAll,
                    i = e.selectAll,
                    o = e.isAllTasksSelected,
                    s = e.isAllDepartment;
                  return f.a.createElement(
                    S.a,
                    { type: 'primary' },
                    f.a.createElement(k.a, {
                      icon: 'check',
                      iconSize: '14',
                      text: o
                        ? A.f.getI18NValue('Deselect All')
                        : A.f.getI18NValue('Select All'),
                      label: o
                        ? A.f.getI18NValue('Deselect All')
                        : A.f.getI18NValue('Select All'),
                      count: n,
                      onClick: o ? r : i
                    }),
                    f.a.createElement(I.c, {
                      moduleName: a,
                      selectedRecords: t
                    }),
                    f.a.createElement(k.a, {
                      icon: 'delete2',
                      text: A.f.getI18NValue(
                        'support.permission.delete.comment'
                      ),
                      label: A.f.getI18NValue(
                        'support.permission.delete.comment'
                      ),
                      iconSize: '13',
                      onClick: this.onMassDelete
                    }),
                    s
                      ? null
                      : f.a.createElement(k.a, {
                          text: A.f.getI18NValue('crm.button.change.owner'),
                          label: A.f.getI18NValue('crm.button.change.owner'),
                          icon: 'newuser',
                          iconSize: '14',
                          onClick: this.onChangeOwner
                        })
                  );
                }
              }
            ]),
            t
          );
        })(f.a.Component);
      (E.propTypes = {
        activityModuleName: g.a.object,
        count: g.a.number,
        deSelectAll: g.a.func,
        deleteCall: g.a.func,
        deleteEvent: g.a.func,
        deleteTask: g.a.func,
        isAllDepartment: g.a.bool,
        isAllTasksSelected: g.a.bool,
        massUpdateFields: g.a.object,
        moduleMeta: g.a.object,
        moduleName: g.a.string,
        selectAll: g.a.func,
        selectedTasks: g.a.number,
        showConfirmBox: g.a.func,
        showMessage: g.a.func,
        tasks: g.a.object,
        updateTask: g.a.func
      }),
        (t.a = Object(v.connect)(
          function(e, t) {
            var a = e.moduleMeta,
              n = a[t.moduleName];
            return { tasks: a.tasks, activityModuleName: n };
          },
          {
            deleteTask: b.b,
            deleteCall: y.c,
            deleteEvent: _.a,
            updateTask: b.m,
            showMessage: C.Q,
            showConfirmBox: C.a.showConfirmBox
          }
        )(E));
    },
    1317: function(e, t, a) {
      'use strict';
      a.d(t, 'a', function() {
        return T;
      });
      var n = a(23),
        r = a.n(n),
        i = a(11),
        o = a.n(i),
        s = a(12),
        l = a.n(s),
        c = a(9),
        u = a.n(c),
        d = a(10),
        m = a.n(d),
        p = a(13),
        f = a.n(p),
        h = a(14),
        g = a.n(h),
        v = a(0),
        b = a.n(v),
        y = a(1),
        _ = a.n(y),
        C = a(254),
        A = a.n(C),
        S = a(8),
        k = a(976),
        I = a(974),
        E = (function(e) {
          function t(e) {
            u()(this, t);
            var a = f()(this, (t.__proto__ || l()(t)).call(this, e));
            return (
              (a.handleSelectAgent = a.handleSelectAgent.bind(a)),
              (a.handleSearchAgents = a.handleSearchAgents.bind(a)),
              (a.handlePopupOpen = a.handlePopupOpen.bind(a)),
              (a.state = {
                defaultSelectedAgentDetails: [],
                isPopupFirstTimeOpened: !1
              }),
              (a.getAgentsList = Object(I.a)()),
              a
            );
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  var t = e.selectedAgents,
                    a = e.agents,
                    n = e.namePattern,
                    r = this.getAgentsList(
                      {},
                      { agents: a, agentIds: t, namePattern: n }
                    );
                  this.setState({ defaultSelectedAgentDetails: r });
                }
              },
              {
                key: 'handleSelectAgent',
                value: function(e) {
                  (0, this.props.onChange)(e);
                }
              },
              {
                key: 'handleSearchAgents',
                value: function(e) {
                  var t = this.props,
                    a = t.onSearchAgents,
                    n = t.getAgents;
                  return a(e), e ? n() : o.a.resolve();
                }
              },
              {
                key: 'handlePopupOpen',
                value: function(e) {
                  var t = this.props.getAgents,
                    a = this.state.isPopupFirstTimeOpened;
                  return (
                    a || this.setState({ isPopupFirstTimeOpened: !0 }),
                    a ? o.a.resolve() : t(e)
                  );
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.agentsList,
                    a = e.getNextAgents,
                    n = e.isNextAgents,
                    i = e.selectedAgents,
                    o = e.noMoreAgentsMessage,
                    s = e.noAgentsMessage,
                    l = e.placeHolder,
                    c = e.dataId,
                    u = this.state.defaultSelectedAgentDetails,
                    d = S.f.getI18NValue('support.label.no.match.found');
                  return b.a.createElement(A.a, {
                    imageField: 'photoURL',
                    textField: 'name',
                    options: [].concat(r()(t), r()(u)),
                    onChange: this.handleSelectAgent,
                    onSearch: this.handleSearchAgents,
                    selectedOptions: i,
                    isNextOptions: n,
                    getNextOptions: a,
                    emptyMessage: s || d,
                    noMoreOptionssMessage: o,
                    needLocalSearch: !1,
                    onDropBoxOpen: this.handlePopupOpen,
                    placeHolder: l,
                    size: 'xmedium',
                    dataId: c
                  });
                }
              }
            ]),
            t
          );
        })(v.Component);
      (E.propTypes = {
        selectedAgents: _.a.array.isRequired,
        onChange: _.a.func.isRequired,
        noAgentsMessage: _.a.string,
        noMoreAgentsMessage: _.a.string,
        placeHolder: _.a.string,
        dataId: _.a.string,
        agents: _.a.object,
        agentsList: _.a.array,
        getAgents: _.a.func,
        getNextAgents: _.a.func,
        onSearchAgents: _.a.func,
        isNextAgents: _.a.bool,
        namePattern: _.a.array,
        departmentId: _.a.string
      }),
        (t.b = Object(k.a)('activeConfirmedAgents')(E));
      var T = Object(k.a)('activeConfirmedNonLightAgents')(E);
    },
    1334: function(e, t, a) {
      e.exports = { container: 'MassActionMessage-module__container' };
    },
    1335: function(e, t, a) {
      e.exports = {
        text: 'MassActionRefresh-module__text',
        icon: 'MassActionRefresh-module__icon'
      };
    },
    1337: function(e, t, a) {
      'use strict';
      var n = a(38),
        r = a.n(n),
        i = a(11),
        o = a.n(i),
        s = a(12),
        l = a.n(s),
        c = a(9),
        u = a.n(c),
        d = a(10),
        m = a.n(d),
        p = a(13),
        f = a.n(p),
        h = a(14),
        g = a.n(h),
        v = a(0),
        b = a.n(v),
        y = a(1),
        _ = a.n(y),
        C = a(26),
        A = a(8),
        S = (a(32), a(249)),
        k = a(100),
        I = a(1005),
        E = a(24),
        T = a(1020),
        O = a(986),
        x = a(1067),
        N = a(6);
      a(17);
      var L = a(1015),
        P = a(950),
        M = a(948),
        w = Object(M.licensePermissionCheckHOC)({
          component: { permission: 'tickets_closeTicket', license: '*' }
        })(P.a),
        j = function(e) {
          e.assignClass;
          var t = e.assignPopup;
          return b.a.createElement(b.a.Fragment, null, t);
        };
      j.propTypes = { assignClass: _.a.string, assignPopup: _.a.element };
      var D = Object(M.licensePermissionCheckHOC)({
          component: { license: '*', permission: '*' }
        })(j),
        R = a(1224),
        F = a(1239),
        B = a(1173),
        V = function(e) {
          return Object(M.licensePermissionCheckHOC)({
            component: { permission: e + '_edit', license: '*' }
          })(P.a);
        },
        U = V('tickets'),
        z = (V('contacts'),
        (function(e) {
          function t() {
            return (
              u()(this, t),
              f()(this, (t.__proto__ || l()(t)).apply(this, arguments))
            );
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.deSelectAll,
                    a = e.selectAll,
                    n = e.onMassClose,
                    r = e.onMassDelete,
                    i = e.onMassMerge,
                    o = e.onMassMarkAsSpam,
                    s = e.selectedItems,
                    l = e.massUpdatePopup,
                    c = e.massAssignPopup,
                    u = e.isAllTicketSelectedInPage,
                    d = e.needCheckBox,
                    m = void 0 !== d && d,
                    p = (e.isThreeLayout, e.isAllDepartment),
                    f = s.length,
                    h = A.f.getI18NValue,
                    g = h(u ? 'Deselect All' : 'Select All'),
                    v = h('Merge'),
                    y = h('Close'),
                    _ = h('Delete'),
                    C = h('Mark as Spam');
                  return b.a.createElement(
                    L.a,
                    { type: 'primary' },
                    b.a.createElement(P.a, {
                      icon: 'check',
                      text: g,
                      iconSize: 14,
                      count: f,
                      isBracketed: !0,
                      onClick: u ? t : a,
                      label: g,
                      needCheckBox: m
                    }),
                    !p &&
                      b.a.createElement(D, {
                        dataId: 'unassigned_all',
                        assignPopup: c
                      }),
                    b.a.createElement(R.g, { updatePopup: l, icon: 'delete2' }),
                    !p &&
                      b.a.createElement(F.c, {
                        dataId: 'massMerge',
                        icon: 'geometry',
                        text: v,
                        iconSize: 18,
                        onClick: i,
                        label: v,
                        type: 'primary'
                      }),
                    b.a.createElement(w, {
                      icon: 'close22',
                      text: y,
                      iconSize: 15,
                      onClick: n,
                      label: y,
                      type: 'primary',
                      dataId: 'massClose'
                    }),
                    b.a.createElement(B.b, {
                      icon: 'delete2',
                      text: _,
                      iconSize: 13,
                      onClick: r,
                      label: _,
                      dataId: 'massDelete',
                      type: 'primary'
                    }),
                    b.a.createElement(U, {
                      icon: 'spam',
                      text: C,
                      iconSize: 13,
                      onClick: o,
                      label: C,
                      type: 'primary',
                      dataId: 'massSpam'
                    })
                  );
                }
              }
            ]),
            t
          );
        })(b.a.Component)),
        G = z;
      z.propTypes = {
        deSelectAll: _.a.func,
        isAllDepartment: _.a.bool,
        isAllTicketSelectedInPage: _.a.bool,
        isThreeLayout: _.a.bool,
        massAssignPopup: _.a.func,
        massUpdatePopup: _.a.func,
        needAssignee: _.a.bool,
        needCheckBox: _.a.bool,
        needClose: _.a.bool,
        needDelete: _.a.bool,
        needMerge: _.a.bool,
        needUpdate: _.a.bool,
        onMassClose: _.a.func,
        onMassDelete: _.a.func,
        onMassMarkAsSpam: _.a.func,
        onMassMerge: _.a.func,
        selectAll: _.a.func,
        selectedItems: _.a.array,
        showText: _.a.bool
      };
      var H, K;
      t.a = ((H = G),
      ((K = (function(e) {
        function t(e) {
          u()(this, t);
          var a = f()(this, (t.__proto__ || l()(t)).call(this, e));
          return (
            (a.massClose = x.a.bind(a)),
            (a.massDelete = x.b.bind(a, 'tickets')),
            (a.massMerge = x.d.bind(a, 'TICKETLIST', 'ticket', 'tickets')),
            (a.massMarkAsSpam = x.c.bind(a, 'tickets')),
            (a.getMassAssignPopup = a.getMassAssignPopup.bind(a)),
            (a.onChangeAssignee = a.onChangeAssignee.bind(a)),
            (a.afterMassUpdate = a.afterMassUpdate.bind(a)),
            a
          );
        }
        return (
          g()(t, e),
          m()(t, [
            {
              key: 'onChangeAssignee',
              value: function(e) {
                var t = this.props,
                  a = t.massUpdateFields,
                  n = t.getOffsetScroll,
                  r = t.selectedItems,
                  i = t.deSelectAll,
                  s = t.showMessage,
                  l = t.moduleMeta,
                  c = t.agents,
                  u = t.afterUpdate,
                  d = e.assigneeId,
                  m = e.teamId,
                  p = { fieldName: 'assigneeId', fieldValue: d, ids: r },
                  f = { fieldName: 'teamId', fieldValue: m, ids: r },
                  h = A.f.getI18NValue;
                o.a
                  .all(
                    [
                      function() {
                        return a(f, 'tickets');
                      },
                      function() {
                        return a(p, 'tickets');
                      }
                    ].map(function(e) {
                      return e();
                    })
                  )
                  .then(function() {
                    var e = r.length,
                      t = e > 1,
                      a = l.tickets,
                      o = a.singularLabel,
                      p = a.pluralLabel,
                      f = t ? p : o,
                      g = [t ? e + ' ' + f : f];
                    if (!m) {
                      var v = c[d],
                        b =
                          'support.label.alert.ticket.' +
                          (t ? 'multi' : 'single') +
                          '.' +
                          (v ? 'assigned' : 'unassigned');
                      v && g.push(Object(N.e)(v.firstName, v.lastName)),
                        s({ type: 'success', message: h(b, g) });
                    }
                    i(), u ? u() : n();
                  });
              }
            },
            {
              key: 'getMassAssignPopup',
              value: function() {
                var e = this.props.isThreeLayout;
                return b.a.createElement(O.a, {
                  page: 'listPageMass',
                  onChangeAssignee: this.onChangeAssignee,
                  isThreeLayout: e,
                  dataId: 'assignTo'
                });
              }
            },
            {
              key: 'afterMassUpdate',
              value: function() {
                var e = this.props,
                  t = e.afterUpdate;
                (0, e.deSelectAll)(), t && t();
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.selectedItems,
                  a = e.showTitle,
                  n = e.isThreeLayout,
                  i = b.a.createElement(T.c, {
                    moduleName: 'tickets',
                    page: 'ticketListMassAssign',
                    selectedRecords: t,
                    afterUpdate: this.afterMassUpdate,
                    showTitle: a,
                    dataId: 'fieldUpdate'
                  }),
                  o = b.a.createElement(O.a, {
                    page: 'listPageMass',
                    onChangeAssignee: this.onChangeAssignee,
                    isThreeLayout: n,
                    dataId: 'assignTo'
                  });
                return b.a.createElement(
                  H,
                  r()(
                    {
                      onMassClose: this.massClose,
                      onMassDelete: this.massDelete,
                      onMassMerge: this.massMerge,
                      onMassMarkAsSpam: this.massMarkAsSpam,
                      massUpdatePopup: i,
                      massAssignPopup: o
                    },
                    this.props
                  )
                );
              }
            }
          ]),
          t
        );
      })(v.Component)).propTypes = {
        afterUpdate: _.a.func,
        deSelectAll: _.a.func,
        deptId: _.a.string,
        getOffsetScroll: _.a.func,
        hideMessage: _.a.func,
        isAllDepartment: _.a.bool,
        isSpamView: _.a.bool,
        isThreeLayout: _.a.bool,
        markSpam: _.a.func,
        massClose: _.a.func,
        massUpdateFields: _.a.func,
        moduleMeta: _.a.object,
        moduleName: _.a.string,
        moveTicketsToTrash: _.a.func,
        openLookUp: _.a.func,
        pushMergeInfo: _.a.func,
        selectedItems: _.a.array,
        showConfirmBox: _.a.func,
        showDelete: _.a.bool,
        showMessage: _.a.func,
        showTitle: _.a.bool
      }),
      Object(C.connect)(
        function(e) {
          return {
            moduleMeta: e.moduleMeta,
            moduleName: e.routing.paramMap.moduleName,
            deptId: e.routing.paramMap.deptId,
            agents: e.module.agent
          };
        },
        {
          showConfirmBox: E.a.showConfirmBox,
          showMessage: E.Q,
          hideMessage: E.w,
          openLookUp: E.G,
          pushMergeInfo: E.L,
          massUpdateFields: I.d,
          markSpam: k.f,
          deleteItem: k.g,
          massClose: S.g
        }
      )(K));
    },
    1338: function(e, t, a) {
      'use strict';
      var n = a(0),
        r = a.n(n),
        i = a(38),
        o = a.n(i),
        s = a(12),
        l = a.n(s),
        c = a(9),
        u = a.n(c),
        d = a(10),
        m = a.n(d),
        p = a(13),
        f = a.n(p),
        h = a(14),
        g = a.n(h),
        v = a(1),
        b = a.n(v),
        y = a(26),
        _ = a(19),
        C = a.n(_),
        A = a(155),
        S = a(24),
        k = a(17),
        I = a(1020),
        E = a(1067);
      a(93);
      var T = a(1015),
        O = a(950),
        x = a(948),
        N = Object(x.licensePermissionCheckHOC)({
          component: { permission: 'contacts_edit', license: '*' }
        })(O.a),
        L = a(8),
        P = a(32),
        M = a(1016),
        w = Object(M.b)({ permission: 'contacts_delete' })(O.a),
        j = Object(P.d)(Object(M.b)({ permission: 'contacts_edit' }), M.a)(
          O.a,
          'contacts',
          'massMerge'
        ),
        D = Object(M.b)({ permission: 'contacts_edit' })(O.a),
        R = (function(e) {
          function t() {
            return (
              u()(this, t),
              f()(this, (t.__proto__ || l()(t)).apply(this, arguments))
            );
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.selectAll,
                    a = e.deSelectAll,
                    n = e.onAddAsEndUser,
                    i = e.onMassDelete,
                    o = e.onMassMerge,
                    s = e.selectedItems,
                    l = e.isAllSelectedInPage,
                    c = e.massUpdatePopup,
                    u = e.needAddAsEndUser,
                    d = void 0 === u || u,
                    m = e.isSpamView,
                    p = e.isAnonymousView,
                    f = e.onMassMarkAsSpam,
                    h = (s.length, L.f.getI18NValue),
                    g = h(l ? 'Deselect All' : 'Select All'),
                    v = h(m ? 'support.not.spam' : 'support.mark.spam');
                  return r.a.createElement(
                    T.a,
                    { type: 'primary' },
                    r.a.createElement(O.a, {
                      count: s.length,
                      needCheckBox: !0,
                      text: g,
                      iconSize: '14',
                      onClick: l ? a : t,
                      dataId: 'allcheck'
                    }),
                    c,
                    r.a.createElement(w, {
                      icon: 'delete2',
                      text: h('Delete'),
                      iconSize: '13',
                      onClick: i,
                      dataId: 'massDelete'
                    }),
                    d &&
                      r.a.createElement(N, {
                        icon: 'newuser',
                        text: h('support.contact.label.add.end.user'),
                        iconSize: '14',
                        onClick: n,
                        dataId: 'sendPortalInvitation'
                      }),
                    r.a.createElement(j, {
                      icon: 'geometry',
                      iconSize: '18',
                      text: h('Merge'),
                      onClick: o,
                      isSpamView: m,
                      isAnonymousView: p,
                      dataId: 'massMerge'
                    }),
                    r.a.createElement(D, {
                      icon: 'spam',
                      text: v,
                      iconSize: 13,
                      onClick: f,
                      label: v
                    })
                  );
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        F = R;
      R.propTypes = {
        deSelectAll: b.a.func,
        isAllSelectedInPage: b.a.bool,
        isAnonymousView: b.a.bool,
        isSpamView: b.a.bool,
        massUpdatePopup: b.a.element,
        needAddAsEndUser: b.a.bool,
        onAddAsEndUser: b.a.func,
        onMassClose: b.a.func,
        onMassDelete: b.a.func,
        onMassMarkAsSpam: b.a.func,
        onMassMerge: b.a.func,
        selectAll: b.a.func,
        selectedItems: b.a.array
      };
      var B, V;
      t.a = ((B = F),
      ((V = (function(e) {
        function t(e) {
          u()(this, t);
          var a = f()(this, (t.__proto__ || l()(t)).call(this, e));
          return (
            (a.onAddAsEndUser = a.onAddAsEndUser.bind(a)),
            (a.onMassDelete = E.b.bind(a, 'contacts')),
            (a.onSpam = E.c.bind(a, 'contacts')),
            (a.onMassMerge = E.d.bind(a, 'CONTACTLIST', 'contact', 'contacts')),
            a
          );
        }
        return (
          g()(t, e),
          m()(t, [
            { key: 'onAddAsEndUser', value: function() {} },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.isSpamView,
                  a = e.isAnonymousView,
                  n = r.a.createElement(I.b, {
                    moduleName: 'contacts',
                    selectedRecords: this.props.selectedItems,
                    afterUpdate: this.props.deSelectAll,
                    isSpamView: t,
                    isAnonymousView: a
                  });
                return r.a.createElement(
                  B,
                  o()(
                    {
                      onAddAsEndUser: this.onAddAsEndUser,
                      onMassDelete: this.onMassDelete,
                      onMassMerge: this.onMassMerge,
                      massUpdatePopup: n,
                      onMassMarkAsSpam: this.onSpam
                    },
                    this.props
                  )
                );
              }
            }
          ]),
          t
        );
      })(r.a.Component)).propTypes = {
        deSelectAll: b.a.func,
        deleteItem: b.a.func,
        deptId: b.a.string,
        getOffsetScroll: b.a.func,
        isAnonymousView: b.a.bool,
        isSpamView: b.a.bool,
        moduleMeta: b.a.object,
        moduleName: b.a.string,
        openLookUp: b.a.func,
        pushMergeInfo: b.a.func,
        selectedCount: b.a.number,
        selectedItems: b.a.number,
        showConfirmBox: b.a.func
      }),
      Object(y.connect)(
        function(e, t) {
          var a = e.moduleMeta,
            n = Object(k.S)(e),
            r = C()(
              '[' +
                Object(k.r)(e) +
                '].contactList.viewDetails[' +
                Object(k.J)(e) +
                '].name',
              Object(k.t)(e)
            );
          return {
            moduleMeta: a,
            moduleName: e.routing.paramMap.moduleName,
            deptId: e.routing.paramMap.deptId,
            isSpamView: 'Spam Contacts' == r && !n.isCustomView,
            isAnonymousView: 'Anonymous Contacts' == r && !n.isCustomView
          };
        },
        {
          showMessage: S.Q,
          showConfirmBox: S.a.showConfirmBox,
          deleteItem: A.b,
          pushMergeInfo: S.L,
          openLookUp: S.G,
          markSpam: A.k
        }
      )(V));
    },
    1339: function(e, t, a) {
      'use strict';
      var n = a(0),
        r = a.n(n),
        i = a(1),
        o = a.n(i),
        s = a(38),
        l = a.n(s),
        c = a(12),
        u = a.n(c),
        d = a(9),
        m = a.n(d),
        p = a(10),
        f = a.n(p),
        h = a(13),
        g = a.n(h),
        v = a(14),
        b = a.n(v),
        y = a(26),
        _ = a(1066),
        C = a(24),
        A = a(1020),
        S = a(1067);
      var k = a(1015),
        I = a(950),
        E = a(8),
        T = a(1016),
        O = Object(T.b)({ permission: 'accounts_delete' })(I.a),
        x = Object(T.b)({ permission: 'accounts_edit' })(I.a),
        N = (function(e) {
          function t() {
            return (
              m()(this, t),
              g()(this, (t.__proto__ || u()(t)).apply(this, arguments))
            );
          }
          return (
            b()(t, e),
            f()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.selectAll,
                    a = e.deSelectAll,
                    n = e.onMassDelete,
                    i = e.onMassMerge,
                    o = e.selectedItems,
                    s = e.isAllSelectedInPage,
                    l = e.massUpdatePopup,
                    c = (o.length, E.f.getI18NValue),
                    u = c(s ? 'Deselect All' : 'Select All');
                  return r.a.createElement(
                    k.a,
                    { type: 'primary' },
                    r.a.createElement(I.a, {
                      count: o.length,
                      icon: 'check',
                      text: u,
                      iconSize: '14',
                      onClick: s ? a : t,
                      dataId: 'allcheck'
                    }),
                    l,
                    r.a.createElement(O, {
                      icon: 'delete2',
                      text: c('Delete'),
                      iconSize: '13',
                      onClick: n,
                      dataId: 'massDelete'
                    }),
                    r.a.createElement(x, {
                      icon: 'geometry',
                      iconSize: '18',
                      text: c('Merge'),
                      onClick: i,
                      dataId: 'massMerge'
                    })
                  );
                }
              }
            ]),
            t
          );
        })(r.a.Component),
        L = N;
      N.propTypes = {
        deSelectAll: o.a.func,
        isAllSelectedInPage: o.a.bool,
        isSpamView: o.a.bool,
        massUpdatePopup: o.a.element,
        onMassDelete: o.a.func,
        onMassMarkAsSpam: o.a.func,
        onMassMerge: o.a.func,
        selectAll: o.a.func,
        selectedItems: o.a.array
      };
      var P, M;
      t.a = ((P = L),
      ((M = (function(e) {
        function t(e) {
          m()(this, t);
          var a = g()(this, (t.__proto__ || u()(t)).call(this, e));
          return (
            (a.onMassDelete = S.b.bind(a, 'accounts')),
            (a.onMassMerge = S.d.bind(a, 'ACCOUNTLIST', 'account', 'accounts')),
            a
          );
        }
        return (
          b()(t, e),
          f()(t, [
            {
              key: 'render',
              value: function() {
                var e = r.a.createElement(A.a, {
                  moduleName: 'accounts',
                  page: 'accountListMassAssign',
                  selectedRecords: this.props.selectedItems,
                  afterUpdate: this.props.deSelectAll
                });
                return r.a.createElement(
                  P,
                  l()(
                    {
                      onMassDelete: this.onMassDelete,
                      onMassMerge: this.onMassMerge,
                      massUpdatePopup: e
                    },
                    this.props
                  )
                );
              }
            }
          ]),
          t
        );
      })(r.a.Component)).propTypes = {
        deSelectAll: o.a.func,
        deleteItem: o.a.func,
        deptId: o.a.string,
        getOffsetScroll: o.a.func,
        moduleMeta: o.a.object,
        openLookUp: o.a.func,
        pushMergeInfo: o.a.func,
        selectedCount: o.a.number,
        selectedItems: o.a.number,
        showConfirmBox: o.a.func
      }),
      Object(y.connect)(
        function(e, t) {
          return {
            moduleMeta: e.moduleMeta,
            deptId: e.routing.paramMap.deptId
          };
        },
        {
          showMessage: C.Q,
          showConfirmBox: C.a.showConfirmBox,
          deleteItem: _.a,
          openLookUp: C.G,
          pushMergeInfo: C.L
        }
      )(M));
    },
    1343: function(e, t, a) {
      'use strict';
      var n = a(15),
        r = a(6),
        i = a(3),
        o = { MOVE_TRASH_MANY_PRODUCTS: 'MOVE_TRASH_MANY_PRODUCTS' };
      function s(e) {
        return {
          types: Object(r.m)(o.MOVE_TRASH_MANY_PRODUCTS),
          callAPI: function(t) {
            return Object(n.a)(i.w + 'products/moveToTrash', !0, {
              orgId: t.currentOrgId
            })
              .post('', { productIds: e })
              .then(function() {
                return { ids: e };
              });
          }
        };
      }
      a.d(t, 'a', function() {
        return s;
      });
    },
    1351: function(e, t, a) {
      'use strict';
      a.d(t, 'c', function() {
        return o;
      }),
        a.d(t, 'd', function() {
          return s;
        }),
        a.d(t, 'e', function() {
          return l;
        }),
        a.d(t, 'a', function() {
          return u;
        }),
        a.d(t, 'f', function() {
          return m;
        }),
        a.d(t, 'b', function() {
          return p;
        });
      var n = a(2),
        r = a.n(n),
        i = a(8);
      function o(e) {
        var t = e.replace(/\s+/g, ''),
          a = i.f.getI18NValue('and'),
          n = i.f.getI18NValue('or');
        return (t = (t = (t = (function(e) {
          for (var t = '', a = 0; a < e.length; a++) {
            var n = e.charAt(a);
            '(' === n || 'd' === n || 'r' === n
              ? (t = t + n + ' ')
              : ')' === n || 'a' === n || 'o' === n
                ? (t = t + ' ' + n)
                : (t += n);
          }
          return t;
        })(s(t))).replace(/(and)/gi, a)).replace(/(or)/gi, n));
      }
      function s(e) {
        var t = e.replace(/\s+/g, ''),
          a = i.f.getI18NValue('and'),
          n = i.f.getI18NValue('or');
        return (t = (t = t.replace(
          new RegExp('(and|' + a + ')', 'gi'),
          'and'
        )).replace(new RegExp('(or|' + n + ')', 'gi'), 'or'));
      }
      function l() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
          t = arguments[1];
        if (!e.trim())
          return {
            errorMessage: 'support.label.enter.cv.pattern',
            isValid: !1
          };
        var a = s(e);
        if ((a.match(/\(/gi) || []).length !== (a.match(/\)/gi) || []).length)
          return {
            errorMessage: 'criteria.error.alert.brackets.count.mismatch',
            isValid: !1
          };
        var n = a.replace(/#/g, '~');
        if (
          -1 !== (n = a.replace(/(and|or)/g, '#')).indexOf('(#') ||
          -1 !== n.indexOf('#)')
        )
          return {
            errorMessage: 'criteria.error.alert.brackets.invalid',
            isValid: !1
          };
        if (-1 !== n.indexOf('()'))
          return { errorMessage: 'criteria.error.alert.brackets', isValid: !1 };
        for (
          var r = a.match(/[0-9]+/g) || [], i = r.length, o = 0;
          o < i;
          o++
        ) {
          if (parseInt(r[o]) !== o + 1)
            return {
              errorMessage: 'sb.criteria.number.notmatch.check',
              isValid: !1
            };
        }
        var l = n
          .replace(/[()]/g, '#')
          .replace(/[0-9]+/g, '#')
          .replace(/#/g, '');
        return l && l.length >= 1
          ? { errorMessage: 'criteria.error.alert.other.params', isValid: !1 }
          : t - 1 !== (a.match(/(and|or)/gi) || []).length
            ? {
                errorMessage: 'criteria.error.alert.andor.rowcount.mismatch',
                isValid: !1
              }
            : i !== t
              ? {
                  errorMessage: 'criteria.error.alert.andor.rowcount.mismatch',
                  isValid: !1
                }
              : { isValid: !0, pattern: a };
      }
      function c(e, t) {
        var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = r()({}, e),
          i = n.accessibility,
          o = void 0 === i ? {} : i,
          s = o.teams,
          l = o.roles,
          c = o.agents,
          u = o.rolesAndSubordinates,
          d = o.type,
          p = void 0 === d ? 'onlyMe' : d,
          f = n.name,
          h = void 0 === f ? '' : f,
          g = n.department;
        g = g || t;
        for (
          var v = n.criteria,
            b = v.pattern,
            y = void 0 === b ? '' : b,
            _ = v.fieldConditions,
            C = [],
            A = [],
            S = _.length,
            k = 0;
          k < S;
          k++
        ) {
          var I = _[k],
            E = I.condition,
            T = I.fieldName,
            O = I.value;
          if (T && '-- Click to select --' !== T) {
            var x = r()({}, { condition: E }, { fieldName: T }, { value: O });
            a && (x.index = k), A.push(x);
          } else C.push(k);
        }
        var N = (function() {
            for (
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t = 0,
                a = arguments[1],
                n = e.length,
                r = 0;
              r < n;
              r++
            ) {
              var i = e[r] - t;
              i >= 0 && ((a = m(i, a)), t++);
            }
            return a;
          })(C, y),
          L = r()({}, { fieldConditions: A }, { pattern: N });
        return r()(
          {},
          {
            accessibility: {
              teams: s,
              roles: l,
              agents: c,
              rolesAndSubordinates: u,
              type: p
            }
          },
          { criteria: L },
          { name: h },
          { department: g }
        );
      }
      function u(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = arguments[2],
          n = arguments[3],
          r = arguments[4],
          i = c(e, a, !0),
          o = c(e, a),
          s = i.name,
          l = void 0 === s ? '' : s,
          u = i.criteria,
          d = i.accessibility,
          m = u.fieldConditions,
          p = d.agents,
          f = void 0 === p ? [] : p,
          h = d.roles,
          g = void 0 === h ? [] : h,
          v = d.rolesAndSubordinates,
          b = void 0 === v ? [] : v,
          y = d.teams,
          _ = void 0 === y ? [] : y,
          C = l.replace(/\s+/g, '');
        if (!l || !C)
          return {
            isValid: !1,
            errorField: 'name',
            errorMessage: 'support.label.cv.name.empty.check'
          };
        if (
          !(function(e) {
            for (
              var t = [
                  '`',
                  '~',
                  '!',
                  '#',
                  '^',
                  '*',
                  '[',
                  ']',
                  '{',
                  '}',
                  '|',
                  '\\',
                  '"',
                  ';',
                  '/',
                  '(',
                  ')'
                ],
                a = t.length,
                n = 0;
              n < a;
              n++
            )
              if (e.indexOf(t[n]) >= 0) return !1;
            return !0;
          })(l)
        )
          return {
            isValid: !1,
            errorField: 'name',
            errorMessage: 'crm.alert.label.special.characters'
          };
        for (var A = n.length, S = !1, k = 0; k < A; k++) {
          if (
            l.replace(/\s+/g, '').toLowerCase() ===
            (n[k] || '').replace(/\s+/g, '').toLowerCase()
          ) {
            S = !0;
            break;
          }
        }
        if (S)
          return {
            isValid: !1,
            errorField: 'name',
            errorMessage: 'crm.alert.customview.name.exists'
          };
        var I = m.length;
        if (!I)
          return {
            isValid: !1,
            errorField: 'criteria',
            errorMessage: 'support.label.cv.criteria.empty.check',
            payloadObj: i
          };
        if (I > 25)
          return {
            isValid: !1,
            errorField: 'criteria',
            errorMessage: 'Criteria limit only 25!',
            payloadObj: i
          };
        for (var E = !1, T = !1, O = '', x = 0, N = 0; N < I; N++) {
          var L = m[N],
            P = L.fieldName,
            M = L.value,
            w = void 0 === M ? [] : M,
            j = L.condition,
            D = L.index,
            R = t[P].type;
          if (!w[0] && 'Happiness Rating' !== P) {
            (E = !0), (O = (t[P] || {}).i18NLabel), (x = D);
            break;
          }
          if (!(w[1] || ('between' !== j && 'not between' !== j))) {
            (T = !0), (O = (t[P] || {}).i18NLabel), (x = D);
            break;
          }
          if (
            ('user' === R || ('team' === R && 'hasAgents' === j)) &&
            w.length > 50
          )
            return {
              isValid: !1,
              errorField: 'criteria',
              errorMessage:
                (t[P] || {}).i18NLabel + ' can select only 50 agents',
              errorFieldIndex: D,
              payloadObj: i
            };
        }
        return E || T
          ? {
              isValid: !1,
              errorField: 'criteria',
              errorMessage: T
                ? 'crm.end.date.field.empty.check'
                : 'crm.field.empty.check',
              criteriaField: O,
              errorFieldIndex: x,
              payloadObj: i
            }
          : 'specificAgents' === r &&
            f &&
            !f.length &&
            g &&
            !g.length &&
            b &&
            !b.length &&
            _ &&
            !_.length
            ? {
                isValid: !1,
                errorField: 'accessibility',
                errorMessage:
                  'support.associate.entity.atleast.one.select.message',
                payloadObj: i
              }
            : { isValid: !0, errorField: '', errorMessage: '', payloadObj: o };
      }
      function d(e, t) {
        var a = t;
        return (
          ('(' !== t && ')' !== t) || (a = '\\' + t),
          (e.match(a + '$') || [])[0] === t
        );
      }
      function m(e, t) {
        for (
          var a = e + 1,
            n = s(t),
            r = (n = n.replace(/[0-9]+/g, '$')).length,
            i = '',
            o = !1,
            l = !1,
            c = 0,
            u = '',
            m = !1,
            p = 0,
            f = '',
            h = 0,
            g = 0;
          g < r;
          g++
        ) {
          if (
            ('$' === (f = n.charAt(g))
              ? (p++, (u = n.substring(c, g)), (c = 0), (m = !0), (f = p))
              : ((m = !1), 0 === c && ')' !== f && '(' !== f && (c = g)),
            m && p === a)
          )
            if (((o = !0), (l = !0), d(u, 'and') || d(u, 'or')))
              i = i.substring(0, i.length - u.length);
            else
              for (var v = 1; v < r; v++)
                if (r > g + v) {
                  if (')' === (f = n.charAt(g + v)) && d(u, '('))
                    if ('' === i) (i = u.substring(0, u.length - 1)), g++;
                    else {
                      if (1 !== a) {
                        (i = i.substring(0, i.length - u.length)), g++;
                        break;
                      }
                      (i = i.substring(0, i.length - 1)), g++;
                    }
                  if ('$' === f || '(' === f) break;
                  h++;
                }
          o ||
            (m && l ? m && l && (i += p - 1) : 0 === h ? (i += f) : (h -= 1)),
            (o = !1);
        }
        return i;
      }
      function p() {
        for (
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 10,
            a = [],
            n = e.length || 0,
            r = t ? Math.ceil(n / t) : 0,
            i = 0;
          i < r;
          i++
        ) {
          var o = i * t,
            s = o + t;
          a[i] = e.slice(o, s);
        }
        return a;
      }
    },
    1449: function(e, t, a) {
      'use strict';
      var n = a(12),
        r = a.n(n),
        i = a(9),
        o = a.n(i),
        s = a(10),
        l = a.n(s),
        c = a(13),
        u = a.n(c),
        d = a(14),
        m = a.n(d),
        p = a(0),
        f = a.n(p),
        h = a(1),
        g = a.n(h),
        v = a(16),
        b = a(1450),
        y = a.n(b),
        _ = (function(e) {
          function t(e) {
            return (
              o()(this, t), u()(this, (t.__proto__ || r()(t)).call(this, e))
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.children;
                  return f.a.createElement(
                    v.Container,
                    {
                      alignBox: 'column',
                      className: y.a.container,
                      isCover: !1
                    },
                    e
                  );
                }
              }
            ]),
            t
          );
        })(p.Component);
      (t.a = _), (_.propTypes = { children: g.a.node });
    },
    1450: function(e, t, a) {
      e.exports = { container: 'Criteria-module__container' };
    },
    1451: function(e, t, a) {
      e.exports = {
        smooth: 'CriteriaRow-module__smooth undefined',
        container: 'CriteriaRow-module__container',
        box: 'CriteriaRow-module__box',
        delete: 'CriteriaRow-module__delete',
        roleNo: 'CriteriaRow-module__roleNo',
        column1: 'CriteriaRow-module__column1',
        column2: 'CriteriaRow-module__column2',
        column3: 'CriteriaRow-module__column3',
        column4: 'CriteriaRow-module__column4',
        disable: 'CriteriaRow-module__disable',
        actionsArea: 'CriteriaRow-module__actionsArea',
        gate: 'CriteriaRow-module__gate'
      };
    },
    1452: function(e, t, a) {
      e.exports = {
        date: 'CriteriaDateWidget-module__date',
        posRel: 'CriteriaDateWidget-module__posRel'
      };
    },
    1453: function(e, t, a) {
      e.exports = {
        disp: 'CriteriaValue-module__disp',
        defaultCriteriaInp: 'CriteriaValue-module__defaultCriteriaInp'
      };
    },
    1454: function(e, t, a) {
      e.exports = {
        plus: 'AndOrPopup-module__plus',
        text: 'AndOrPopup-module__text common-module__offSelection'
      };
    },
    1527: function(e, t, a) {
      e.exports = { container: 'AdvancedSearchLeftMenu-module__container' };
    },
    1528: function(e, t, a) {
      e.exports = {
        container: 'AdvancedSearchMenuItem-module__container',
        active: 'AdvancedSearchMenuItem-module__active',
        iconBox: 'AdvancedSearchMenuItem-module__iconBox',
        text:
          'AdvancedSearchMenuItem-module__text common-module__dotted common-module__oflow common-module__ellipsis'
      };
    },
    1533: function(e, t, a) {
      'use strict';
      var n = a(12),
        r = a.n(n),
        i = a(9),
        o = a.n(i),
        s = a(10),
        l = a.n(s),
        c = a(13),
        u = a.n(c),
        d = a(14),
        m = a.n(d),
        p = a(0),
        f = a.n(p),
        h = a(1),
        g = a.n(h),
        v = a(8),
        b = a(1451),
        y = a.n(b),
        _ = a(949),
        C = a.n(_),
        A = a(38),
        S = a.n(A),
        k = a(99),
        I = a.n(k),
        E = a(947),
        T = a.n(E),
        O = a(971),
        x = a.n(O),
        N = a(80),
        L = a.n(N),
        P = a(1452),
        M = a.n(P),
        w = (function(e) {
          function t(e) {
            o()(this, t);
            var a = u()(this, (t.__proto__ || r()(t)).call(this, e));
            return (a.handleSelect = a.handleSelect.bind(a)), a;
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'handleSelect',
                value: function(e, t) {
                  var a = this.props,
                    n = a.onSelect,
                    r = a.togglePopup,
                    i = e ? new Date(e).toISOString() : '';
                  r(t), n(i);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.togglePopup,
                    a = e.isPopupOpen,
                    n = e.removeClose,
                    r = e.isDateTime,
                    i = e.value,
                    o = e.position,
                    s = e.timeZone,
                    l = e.isPopupReady,
                    c = e.getContainerRef,
                    u = e.getTargetRef;
                  return f.a.createElement(
                    'div',
                    { className: M.a.posRel },
                    f.a.createElement(
                      'div',
                      { className: M.a.date, onClick: t, ref: u },
                      f.a.createElement(I.a, {
                        value: i
                          ? v.f.userDateFormat(i, {}, '', '', !1, function() {
                              return r ? 'DD MMM YYYY hh:mm A' : 'DD/MMM/YYYY';
                            })
                          : '',
                        isReadOnly: !0,
                        placeHolder: r
                          ? 'DD MMM YYYY hh:mm A'
                          : v.f.getI18NValue('support.label.enter.date')
                      })
                    ),
                    f.a.createElement(x.a, {
                      value: i,
                      isDateTimeField: r,
                      onSelect: this.handleSelect,
                      timeZone: s,
                      position: o,
                      noNeedToCheckRange: !0,
                      isActive: l,
                      isReady: a,
                      onClick: n,
                      getRef: c
                    })
                  );
                }
              }
            ]),
            t
          );
        })(p.Component);
      w.propTypes = {
        getContainerRef: g.a.func,
        getTargetRef: g.a.func,
        isDateTime: g.a.bool,
        isPopupOpen: g.a.bool,
        isPopupReady: g.a.bool,
        onSelect: g.a.func,
        position: g.a.string,
        removeClose: g.a.func,
        timeZone: g.a.string,
        togglePopup: g.a.func,
        value: g.a.string
      };
      var j = L()(w),
        D = a(1317),
        R = a(203),
        F = a.n(R),
        B = (a(1453), a(22)),
        V = (function(e) {
          function t(e) {
            o()(this, t);
            var a = u()(this, (t.__proto__ || r()(t)).call(this, e));
            return (
              (a.handleValueChange = a.handleValueChange.bind(a)),
              (a.handleToggleCheckBox = a.handleToggleCheckBox.bind(a)),
              (a.handleDateTimeFieldChange = a.handleDateTimeFieldChange.bind(
                a
              )),
              (a.handleDateTimeDropDownChange = a.handleDateTimeDropDownChange.bind(
                a
              )),
              (a.handleLookupClear = a.handleLookupClear.bind(a)),
              a
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'handleValueChange',
                value: function(e) {
                  (0, this.props.onChange)(Array.isArray(e) ? e : [e]);
                }
              },
              {
                key: 'handleToggleCheckBox',
                value: function() {
                  var e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0],
                    t = this.props.onChange;
                  t([e.toString()]);
                }
              },
              {
                key: 'handleDateTimeDropDownChange',
                value: function(e) {
                  var t = this.props,
                    a = t.onChange,
                    n = t.conditionName;
                  return a(
                    'between' === n || 'not between' === n
                      ? '${CUSTOM}' === e
                        ? ['', '']
                        : [e, '']
                      : '${CUSTOM}' === e
                        ? ['']
                        : [e]
                  );
                }
              },
              {
                key: 'handleDateTimeFieldChange',
                value: function(e, t) {
                  var a = this.props,
                    n = a.onChange,
                    r = a.value;
                  (r[e] = t), n(r);
                }
              },
              {
                key: 'handleLookupClear',
                value: function() {
                  (0, this.props.onChange)('');
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.value,
                    a = void 0 === t ? [] : t,
                    n = e.type,
                    r = e.timeZone,
                    i = e.conditionName,
                    o = e.isReadOnly,
                    s = e.fieldName,
                    l = e.pickValues,
                    c = void 0 === l ? [] : l,
                    u = e.teamsList,
                    d = e.criteriaIndex,
                    m = e.deptId,
                    p = e.dataId,
                    h = v.f.getI18NValue('support.label.no.match.found'),
                    g = v.f.getI18NValue('support.label.currentTime'),
                    b = v.f.getI18NValue('support.label.customTime'),
                    y = v.f.getI18NValue('support.label.cv.empty.value'),
                    _ = v.f.getI18NValue('support.label.cv.notempty.value'),
                    A = {
                      needClearIcon: !0,
                      needSearchIcon: !0,
                      needLookupBox: !0,
                      needSuggestionBox: !1,
                      onSelect: this.handleValueChange,
                      selectedId: a,
                      isInputDisable: !0,
                      onClear: this.handleLookupClear
                    };
                  if (o)
                    return f.a.createElement(I.a, {
                      dataId: p,
                      isReadOnly: !0,
                      value:
                        'is empty' === i ? y : 'is not empty' === i ? _ : ''
                    });
                  if (
                    ('Happiness Rating' === s || 'CRM Contact Type' === s) &&
                    c.length
                  )
                    return f.a.createElement(C.a, {
                      dataId: p,
                      emptyMessage: v.f.getI18NValue(
                        'support.label.no.match.found'
                      ),
                      onChange: this.handleValueChange,
                      options: c,
                      selectedValue: a[0]
                    });
                  if ('text' === n)
                    return f.a.createElement(I.a, {
                      dataId: p,
                      onChange: this.handleValueChange,
                      isReadOnly: o,
                      value: a[0]
                    });
                  if ('boolean' === n) {
                    var k = 'true' === a[0];
                    return f.a.createElement(T.a, {
                      dataId: p,
                      checked: k,
                      id: 'criteriaCheckbox' + d,
                      onChange: this.handleToggleCheckBox
                    });
                  }
                  return 'integer' === n
                    ? f.a.createElement(I.a, {
                        dataId: p,
                        needBorder: !1,
                        onChange: this.handleValueChange,
                        type: 'number',
                        value: a[0]
                      })
                    : 'date' === n
                      ? f.a.createElement(j, {
                          dataId: p,
                          isDateTime: !1,
                          onSelect: this.handleValueChange,
                          timeZone: r,
                          value: a[0]
                        })
                      : 'dateTime' === n
                        ? f.a.createElement(
                            'span',
                            null,
                            f.a.createElement(C.a, {
                              dataId: p,
                              needBorder: !0,
                              onChange: this.handleDateTimeDropDownChange,
                              options: [
                                { value: '${CURRENTTIME}', text: g },
                                { value: '${CUSTOM}', text: b }
                              ],
                              selectedValue:
                                '${CURRENTTIME}' === a[0]
                                  ? '${CURRENTTIME}'
                                  : '${CUSTOM}',
                              textField: 'text',
                              valueField: 'value'
                            }),
                            '${CURRENTTIME}' !== a[0]
                              ? f.a.createElement(j, {
                                  dataId: p,
                                  isDateTime: !0,
                                  onSelect: this.handleDateTimeFieldChange.bind(
                                    this,
                                    0
                                  ),
                                  timeZone: r,
                                  value: a[0]
                                })
                              : null,
                            2 === a.length
                              ? f.a.createElement(j, {
                                  dataId: p,
                                  isDateTime: !0,
                                  onSelect: this.handleDateTimeFieldChange.bind(
                                    this,
                                    1
                                  ),
                                  timeZone: r,
                                  value: a[1]
                                })
                              : null
                          )
                        : 'user' === n || ('team' === n && 'has agents' === i)
                          ? f.a.createElement(D.b, {
                              dataId: p,
                              onChange: this.handleValueChange,
                              selectedAgents: a
                            })
                          : 'team' === n
                            ? f.a.createElement(F.a, {
                                dataId: p,
                                emptyMessage: h,
                                onChange: this.handleValueChange,
                                options: u,
                                selectedOptions: a,
                                size: 'xmedium',
                                textField: 'name',
                                valueField: 'id'
                              })
                            : 'lookup' === n
                              ? 'Contact Name' === s
                                ? f.a.createElement(B.A, S()({ dataId: p }, A))
                                : 'Product Name' === s
                                  ? f.a.createElement(
                                      B.hb,
                                      S()({ dataId: p }, A, {
                                        deptId: m,
                                        needAddIcon: !1
                                      })
                                    )
                                  : 'Account Name' === s
                                    ? f.a.createElement(
                                        B.d,
                                        S()({ dataId: p }, A)
                                      )
                                    : 'Request' === s
                                      ? f.a.createElement(
                                          B.Bb,
                                          S()({ dataId: p }, A, { deptId: m })
                                        )
                                      : f.a.createElement(I.a, {
                                          readOnly: !0,
                                          value: '',
                                          dataId: p
                                        })
                              : f.a.createElement(I.a, {
                                  readOnly: !0,
                                  value: '',
                                  dataId: p
                                });
                }
              }
            ]),
            t
          );
        })(p.Component),
        U = V;
      V.propTypes = {
        conditionName: g.a.string,
        criteriaIndex: g.a.number,
        dataId: g.a.string,
        deptId: g.a.string,
        fieldName: g.a.string,
        isReadOnly: g.a.bool,
        onChange: g.a.func,
        pickValues: g.a.array,
        teamsList: g.a.array,
        timeZone: g.a.string,
        type: g.a.string,
        value: g.a.array
      };
      var z = a(1454),
        G = a.n(z),
        H = a(30),
        K = a(16),
        Y = (function(e) {
          function t(e) {
            o()(this, t);
            var a = u()(this, (t.__proto__ || r()(t)).call(this, e));
            return (a.handleToggle = a.handleToggle.bind(a)), a;
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'handleToggle',
                value: function() {
                  var e = this.props,
                    t = e.operator,
                    a = e.updateCriteria;
                  'and' == t ? a('or') : 'or' == t && a('and');
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.operator,
                    a = e.addCriteria,
                    n = e.dataId;
                  return t
                    ? f.a.createElement(v.c, {
                        className: G.a.text,
                        onClick: this.handleToggle,
                        i18NKey: t
                      })
                    : f.a.createElement(
                        K.Container,
                        {
                          align: 'vertical',
                          isCover: !1,
                          className: G.a.plus,
                          dataId: n,
                          onClick: a.bind(this, 'and')
                        },
                        f.a.createElement(H.TopbandFontIcon, {
                          name: 'plus',
                          size: '11'
                        })
                      );
                }
              }
            ]),
            t
          );
        })(p.Component);
      Y.propTypes = {
        addCriteria: h.PropTypes.func.isRequired,
        dataId: h.PropTypes.string,
        operator: h.PropTypes.string,
        updateCriteria: h.PropTypes.func.isRequired
      };
      var W = Y,
        q = (function(e) {
          function t(e) {
            o()(this, t);
            var a = u()(this, (t.__proto__ || r()(t)).call(this, e));
            return (
              (a.handleFieldChange = a.handleFieldChange.bind(a)),
              (a.handleConditionChange = a.handleConditionChange.bind(a)),
              (a.handleValueChange = a.handleValueChange.bind(a)),
              (a.handleDeleteCriteria = a.handleDeleteCriteria.bind(a)),
              (a.handleUpdateCriteriaOperator = a.handleUpdateCriteriaOperator.bind(
                a
              )),
              a
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'handleFieldChange',
                value: function(e) {
                  var t = this.props,
                    a = t.onFieldChange,
                    n = t.criteriaIndex;
                  e !== t.selectedField && a(n, e);
                }
              },
              {
                key: 'handleConditionChange',
                value: function(e) {
                  var t = this.props,
                    a = t.onConditionChange,
                    n = t.criteriaIndex;
                  e !== t.SelectedCondition && a(n, e);
                }
              },
              {
                key: 'handleValueChange',
                value: function(e) {
                  var t = this.props;
                  (0, t.onValueChange)(t.criteriaIndex, e);
                }
              },
              {
                key: 'handleDeleteCriteria',
                value: function() {
                  var e = this.props;
                  (0, e.onDeleteCriteria)(e.criteriaIndex);
                }
              },
              {
                key: 'handleUpdateCriteriaOperator',
                value: function(e) {
                  var t = this.props;
                  (0, t.onUpdateCriteriaOperator)(t.criteriaIndex, e);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.roleNo,
                    a = e.isDeleteCriteria,
                    n = e.fieldDisable,
                    r = e.fields,
                    i = e.selectedField,
                    o = e.conditionDisable,
                    s = e.conditions,
                    l = e.SelectedCondition,
                    c = e.operator,
                    u = e.onAddCriteria,
                    d = e.value,
                    m = e.valueType,
                    p = e.timeZone,
                    h = e.pickValues,
                    g = e.teamsList,
                    b = e.criteriaIndex,
                    _ = e.deptId;
                  return f.a.createElement(
                    K.Container,
                    {
                      alignBox: 'row',
                      align: 'vertical',
                      className: y.a.container,
                      isCover: !1
                    },
                    f.a.createElement(
                      K.Box,
                      { className: y.a.box, flexible: !0 },
                      f.a.createElement(
                        K.Container,
                        { alignBox: 'row' },
                        f.a.createElement(
                          K.Box,
                          { className: y.a.column1 },
                          f.a.createElement(
                            'span',
                            {
                              className: y.a.roleNo,
                              dataId: 'criteriaRow_' + t
                            },
                            t
                          ),
                          a
                            ? f.a.createElement(
                                K.Container,
                                {
                                  align: 'vertical',
                                  className: y.a.delete,
                                  onClick: this.handleDeleteCriteria
                                },
                                f.a.createElement(H.ChannelsFontIcon, {
                                  name: 'close2',
                                  size: '7'
                                })
                              )
                            : null
                        ),
                        f.a.createElement(
                          K.Box,
                          { flexible: !0 },
                          f.a.createElement(
                            K.Container,
                            { alignBox: 'row' },
                            f.a.createElement(
                              K.Box,
                              {
                                className: o
                                  ? y.a.column2 + ' ' + y.a.disable
                                  : '' + y.a.column2,
                                flexible: !0,
                                shrink: !0
                              },
                              f.a.createElement(C.a, {
                                emptyMessage: v.f.getI18NValue(
                                  'support.label.no.match.found'
                                ),
                                dataId: 'criteriaField',
                                isReadOnly: n,
                                needBorder: !1,
                                needSearch: !0,
                                onChange: this.handleFieldChange,
                                options: r,
                                selectedValue: i,
                                textField: 'i18NLabel',
                                valueField: 'fieldLabel'
                              })
                            ),
                            f.a.createElement(
                              K.Box,
                              {
                                className: o
                                  ? y.a.column3 + ' ' + y.a.disable
                                  : '' + y.a.column3,
                                flexible: !0,
                                shrink: !0
                              },
                              f.a.createElement(C.a, {
                                emptyMessage: v.f.getI18NValue(
                                  'support.label.no.match.found'
                                ),
                                dataId: 'criteriaCondition',
                                isReadOnly: o,
                                needBorder: !1,
                                onChange: this.handleConditionChange,
                                options: s,
                                selectedValue: l,
                                textField: 'i18NCondition',
                                valueField: 'condition'
                              })
                            ),
                            f.a.createElement(
                              K.Box,
                              {
                                className: y.a.column4,
                                flexible: !0,
                                shrink: !0
                              },
                              f.a.createElement(U, {
                                conditionName: l,
                                criteriaIndex: b,
                                dataId: 'criteriaValue',
                                fieldName: i,
                                isReadOnly:
                                  'is empty' === l ||
                                  'is not empty' === l ||
                                  'is OPEN' === l ||
                                  'is CLOSED' === l ||
                                  !d,
                                onChange: this.handleValueChange,
                                pickValues: h,
                                teamsList: g,
                                timeZone: p,
                                type: m,
                                value: d,
                                deptId: _
                              })
                            )
                          )
                        )
                      )
                    ),
                    f.a.createElement(
                      K.Box,
                      { className: y.a.actionsArea, shrink: !1 },
                      f.a.createElement(
                        'div',
                        { className: y.a.gate },
                        f.a.createElement(W, {
                          addCriteria: u,
                          operator: c,
                          updateCriteria: this.handleUpdateCriteriaOperator,
                          dataId: 'criteriaAddBtn'
                        })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(p.PureComponent);
      t.a = q;
      q.propTypes = {
        SelectedCondition: g.a.string,
        conditionDisable: g.a.bool,
        conditions: g.a.array,
        criteriaIndex: g.a.number,
        deptId: g.a.string,
        fieldDisable: g.a.bool,
        fields: g.a.array,
        isDeleteCriteria: g.a.bool,
        onAddCriteria: g.a.func,
        onConditionChange: g.a.func,
        onDeleteCriteria: g.a.func,
        onFieldChange: g.a.func,
        onUpdateCriteriaOperator: g.a.func,
        onValueChange: g.a.func,
        operator: g.a.string,
        pickValues: g.a.array,
        roleNo: g.a.number,
        selectedField: g.a.string,
        teamsList: g.a.array,
        timeZone: g.a.string,
        value: g.a.array,
        valueType: g.a.string
      };
    },
    1537: function(e, t, a) {
      'use strict';
      var n = a(12),
        r = a.n(n),
        i = a(9),
        o = a.n(i),
        s = a(10),
        l = a.n(s),
        c = a(13),
        u = a.n(c),
        d = a(14),
        m = a.n(d),
        p = a(0),
        f = a.n(p),
        h = a(1),
        g = a.n(h),
        v = a(1527),
        b = a.n(v),
        y = a(16),
        _ = a(1528),
        C = a.n(_),
        A = a(56),
        S = a.n(A),
        k = (function(e) {
          function t(e) {
            o()(this, t);
            var a = u()(this, (t.__proto__ || r()(t)).call(this, e));
            return (a.onClick = a.onClick.bind(a)), a;
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'onClick',
                value: function() {
                  var e = this.props,
                    t = e.onClick;
                  t(e.moduleName);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.iconName,
                    a = e.iconSize,
                    n = e.text,
                    r = e.active;
                  e.onClick;
                  return f.a.createElement(
                    y.Container,
                    {
                      isCover: !1,
                      alignBox: 'row',
                      className:
                        (r ? null : C.a.container) +
                        ' ' +
                        (r ? C.a.active : ''),
                      align: 'vertical',
                      onClick: this.onClick,
                      dataId: 'advancedSearchMenuItem'
                    },
                    f.a.createElement(
                      y.Box,
                      { className: C.a.iconBox },
                      f.a.createElement(S.a, { name: t, size: a })
                    ),
                    f.a.createElement(
                      y.Box,
                      { flexible: !0, className: '' + C.a.text },
                      n
                    )
                  );
                }
              }
            ]),
            t
          );
        })(f.a.Component),
        I = k;
      k.propTypes = {
        active: g.a.bool,
        iconName: g.a.string,
        iconSize: g.a.string,
        moduleName: g.a.string,
        onClick: g.a.func,
        text: g.a.string
      };
      var E = a(8),
        T = (function(e) {
          function t() {
            return (
              o()(this, t),
              u()(this, (t.__proto__ || r()(t)).apply(this, arguments))
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.searchModules,
                    a = void 0 === t ? [] : t,
                    n = e.searchModule,
                    r = e.onClick,
                    i = e.moduleIconMapper,
                    o = e.onBackClick,
                    s = e.needBack,
                    l = void 0 === s || s;
                  return f.a.createElement(
                    y.Container,
                    { className: b.a.container },
                    f.a.createElement(
                      y.Box,
                      { flexible: !0, scroll: 'vertical' },
                      a.map(function(e, t) {
                        return f.a.createElement(I, {
                          key: t,
                          iconName: i[e.apiKey],
                          iconSize: '16',
                          text: e.displayLabel,
                          active: e.apiKey === n,
                          onClick: r,
                          moduleName: l ? e.apiKey : e.sanitizedName
                        });
                      })
                    ),
                    l &&
                      f.a.createElement(
                        y.Box,
                        null,
                        f.a.createElement(I, {
                          iconName: 'arrowLeft',
                          iconSize: '16',
                          text: E.f.getI18NValue('support.crmlabel.back'),
                          onClick: o
                        })
                      )
                  );
                }
              }
            ]),
            t
          );
        })(f.a.Component);
      t.a = T;
      T.propTypes = {
        moduleIconMapper: g.a.object,
        needBack: g.a.bool,
        onBackClick: g.a.func,
        onClick: g.a.func,
        searchModule: g.a.bool,
        searchModules: g.a.array
      };
    },
    173: function(e, t, a) {
      e.exports = {
        container: 'Loading-module__container',
        dot: 'Loading-module__dot',
        bounce: 'Loading-module__bounce'
      };
    },
    178: function(e, t, a) {
      e.exports = {
        classic: 'ListviewStencil-module__classic',
        stencilSec: 'ListviewStencil-module__stencilSec common-module__flexrow',
        stencil: 'ListviewStencil-module__stencil common-module__alignVertical',
        lft: 'ListviewStencil-module__lft common-module__flexshrink',
        middle: 'ListviewStencil-module__middle common-module__flexgrow',
        secondLIne: 'ListviewStencil-module__secondLIne',
        rgt: 'ListviewStencil-module__rgt common-module__flexshrink',
        compact: 'ListviewStencil-module__compact',
        gridview: 'ListviewStencil-module__gridview'
      };
    },
    1923: function(e, t, a) {
      e.exports = { container: 'AdvancedSearchContainer-module__container' };
    },
    1924: function(e, t, a) {
      e.exports = {
        container: 'AdvancedSearchList-module__container',
        title: 'AdvancedSearchList-module__title'
      };
    },
    1925: function(e, t, a) {
      e.exports = {
        headerCustview: 'AdvancedSearchCriteria-module__headerCustview',
        custview: 'AdvancedSearchCriteria-module__custview',
        labelPart: 'AdvancedSearchCriteria-module__labelPart',
        criteriaLabel: 'AdvancedSearchCriteria-module__criteriaLabel',
        visbleTxt: 'AdvancedSearchCriteria-module__visbleTxt',
        radiosec: 'AdvancedSearchCriteria-module__radiosec',
        radioTxt: 'AdvancedSearchCriteria-module__radioTxt',
        criteria: 'AdvancedSearchCriteria-module__criteria',
        fsm: 'AdvancedSearchCriteria-module__fsm undefined',
        disabled:
          'AdvancedSearchCriteria-module__disabled common-module__disabled',
        criteriaPattern: 'AdvancedSearchCriteria-module__criteriaPattern',
        ctPrtnTx: 'AdvancedSearchCriteria-module__ctPrtnTx',
        patternEditCont: 'AdvancedSearchCriteria-module__patternEditCont',
        pattrenEditTx:
          'AdvancedSearchCriteria-module__pattrenEditTx common-module__semibold common-module__ftsmooth',
        patternTextBox:
          'AdvancedSearchCriteria-module__patternTextBox common-module__semibold common-module__ftsmooth',
        patternSave: 'AdvancedSearchCriteria-module__patternSave',
        patternCancel: 'AdvancedSearchCriteria-module__patternCancel',
        pattrenEditBtn:
          'AdvancedSearchCriteria-module__pattrenEditBtn common-module__semibold common-module__ftsmooth',
        patternEdit: 'AdvancedSearchCriteria-module__patternEdit',
        errorMsg: 'AdvancedSearchCriteria-module__errorMsg'
      };
    },
    1926: function(e, t, a) {
      e.exports = { box: 'ProductMassAction-module__box' };
    },
    221: function(e, t, a) {
      e.exports = {
        container: 'ListPageLayout-module__container',
        leftPadding: 'ListPageLayout-module__leftPadding',
        footer: 'ListPageLayout-module__footer',
        content: 'ListPageLayout-module__content'
      };
    },
    233: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = (function() {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var n = t[a];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function(t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t;
          };
        })(),
        r = s(a(0)),
        i = s(a(1)),
        o = s(a(527));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
            (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ('object' != typeof t && 'function' != typeof t)
                ? e
                : t;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, r.default.Component),
          n(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.shape,
                  a = e.size,
                  n = e.palette;
                return (
                  (a = 'rect' === t ? o.default[a] : o.default['c' + a]),
                  (t = 'rect' === t ? o.default.rectangular : o.default.circle),
                  r.default.createElement('div', {
                    className: t + ' ' + a + ' ' + o.default[n]
                  })
                );
              }
            }
          ]),
          t
        );
      })();
      (t.default = l),
        (l.propTypes = {
          palette: i.default.oneOf(['primary', 'secondary']),
          shape: i.default.oneOf(['rect', 'circle']),
          size: i.default.oneOf(['small', 'medium', 'large', 'default'])
        }),
        (l.defaultProps = {
          palette: 'primary',
          shape: 'rect',
          size: 'medium'
        }),
        (l.propTypesDescription = { shape: ' ', size: ' ', palette: ' ' });
    },
    333: function(e, t, a) {
      'use strict';
      a.d(t, 'c', function() {
        return A;
      }),
        a.d(t, 'b', function() {
          return S;
        }),
        a.d(t, 'a', function() {
          return k;
        });
      var n = a(12),
        r = a.n(n),
        i = a(9),
        o = a.n(i),
        s = a(10),
        l = a.n(s),
        c = a(13),
        u = a.n(c),
        d = a(14),
        m = a.n(d),
        p = a(0),
        f = a.n(p),
        h = a(1),
        g = a.n(h),
        v = a(65),
        b = a(16),
        y = a(221),
        _ = a.n(y),
        C = (function(e) {
          function t() {
            return (
              o()(this, t),
              u()(this, (t.__proto__ || r()(t)).apply(this, arguments))
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.children,
                    a = e.dataId;
                  return f.a.createElement(
                    v.Card,
                    { className: '' + _.a.container, dataId: a },
                    t
                  );
                }
              }
            ]),
            t
          );
        })(f.a.Component);
      (t.d = C), (C.propTypes = { children: g.a.element, dataId: g.a.string });
      var A = (function(e) {
        function t(e) {
          return o()(this, t), u()(this, (t.__proto__ || r()(t)).call(this, e));
        }
        return (
          m()(t, e),
          l()(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = (e.isScroll, e.children),
                  a = e.needPadding;
                return f.a.createElement(
                  v.CardHeader,
                  { className: '' + (a ? _.a.leftPadding : '') },
                  f.a.createElement(f.a.Fragment, null, t)
                );
              }
            }
          ]),
          t
        );
      })(p.Component);
      (A.propTypes = {
        children: g.a.element,
        isScroll: g.a.bool,
        needPadding: g.a.bool
      }),
        (A.defaultProps = { isScroll: !1, needPadding: !0 });
      var S = (function(e) {
        function t(e) {
          return o()(this, t), u()(this, (t.__proto__ || r()(t)).call(this, e));
        }
        return (
          m()(t, e),
          l()(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props.children;
                return f.a.createElement(
                  v.CardFooter,
                  { className: '' + _.a.footer },
                  e
                );
              }
            }
          ]),
          t
        );
      })(p.Component);
      S.propTypes = { children: g.a.element };
      var k = (function(e) {
        function t(e) {
          return o()(this, t), u()(this, (t.__proto__ || r()(t)).call(this, e));
        }
        return (
          m()(t, e),
          l()(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.children,
                  a = e.scroll,
                  n = e.eleRef,
                  r = e.className,
                  i = e.needPadding,
                  o = e.dataId,
                  s = e.alignBox,
                  l = e.isCover;
                return f.a.createElement(
                  v.CardContent,
                  {
                    scroll: a,
                    className: (i ? _.a.content : '') + ' ' + (r || ''),
                    eleRef: n,
                    dataId: o
                  },
                  f.a.createElement(
                    b.ResponsiveContainer,
                    {
                      alignBox: s,
                      elementMedia: {},
                      wrap: 'row' == s,
                      isCover: l
                    },
                    t
                  )
                );
              }
            }
          ]),
          t
        );
      })(p.Component);
      (k.propTypes = {
        alignBox: g.a.oneOf(['row', 'column']),
        children: g.a.element,
        className: g.a.string,
        dataId: g.a.string,
        eleRef: g.a.func,
        isCover: g.a.bool,
        needPadding: g.a.bool,
        scroll: g.a.string
      }),
        (k.defaultProps = {
          scroll: 'vertical',
          needPadding: !0,
          alignBox: 'column',
          isCover: !0
        });
      var I = (function(e) {
        function t(e) {
          o()(this, t);
          var a = u()(this, (t.__proto__ || r()(t)).call(this, e));
          return (
            (a.state = { responsiveView: '' }),
            (a.getResponsiveView = a.getResponsiveView.bind(a)),
            a
          );
        }
        return (
          m()(t, e),
          l()(t, [
            {
              key: 'getResponsiveView',
              value: function(e) {
                this.state.responsiveView != e &&
                  this.setState({ responsiveView: e });
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props,
                  a = t.children,
                  n = t.scroll,
                  r = t.eleRef,
                  i = t.className,
                  o = t.needPadding,
                  s = t.dataId;
                return f.a.createElement(
                  v.CardContent,
                  {
                    scroll: n,
                    className: (o ? _.a.content : '') + ' ' + (i || ''),
                    eleRef: r,
                    dataId: s
                  },
                  f.a.createElement(
                    b.ResponsiveContainer,
                    {
                      alignBox: 'column',
                      elementMedia: {},
                      onCallBack: this.getResponsiveView
                    },
                    f.a.Children.map(a, function(t) {
                      return t
                        ? f.a.cloneElement(t, {
                            responsiveView: e.state.responsiveView
                          })
                        : null;
                    })
                  )
                );
              }
            }
          ]),
          t
        );
      })(p.Component);
      (I.propTypes = {
        children: g.a.element,
        className: g.a.string,
        dataId: g.a.string,
        eleRef: g.a.func,
        needPadding: g.a.bool,
        scroll: g.a.string
      }),
        (I.defaultProps = { scroll: 'vertical', needPadding: !0 });
    },
    458: function(e, t, a) {
      'use strict';
      var n = a(12),
        r = a.n(n),
        i = a(9),
        o = a.n(i),
        s = a(10),
        l = a.n(s),
        c = a(13),
        u = a.n(c),
        d = a(14),
        m = a.n(d),
        p = a(0),
        f = a.n(p),
        h = a(173),
        g = a.n(h),
        v = a(16),
        b = (function(e) {
          function t() {
            return (
              o()(this, t),
              u()(this, (t.__proto__ || r()(t)).apply(this, arguments))
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function() {
                  return f.a.createElement(
                    v.Container,
                    {
                      alignBox: 'row',
                      align: 'both',
                      className: g.a.container
                    },
                    f.a.createElement(v.Box, { className: g.a.dot }),
                    f.a.createElement(v.Box, { className: g.a.dot }),
                    f.a.createElement(v.Box, { className: g.a.dot }),
                    f.a.createElement(v.Box, { className: g.a.dot }),
                    f.a.createElement(v.Box, { className: g.a.dot }),
                    f.a.createElement(v.Box, { className: g.a.dot })
                  );
                }
              }
            ]),
            t
          );
        })(f.a.Component);
      t.a = b;
    },
    462: function(e, t, a) {
      'use strict';
      a.d(t, 'a', function() {
        return k;
      });
      var n = a(38),
        r = a.n(n),
        i = a(12),
        o = a.n(i),
        s = a(9),
        l = a.n(s),
        c = a(10),
        u = a.n(c),
        d = a(13),
        m = a.n(d),
        p = a(14),
        f = a.n(p),
        h = a(0),
        g = a.n(h),
        v = a(1),
        b = a.n(v),
        y = a(26),
        _ = a(91),
        C = a(115),
        A = a(103),
        S = a(132);
      function k() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : function() {
                  return [];
                },
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return function(a) {
          var n = (function(n) {
            function i(e) {
              l()(this, i);
              var t = m()(this, (i.__proto__ || o()(i)).call(this, e));
              return (
                (t.renderList = t.renderList.bind(t)),
                (t.getSearchResults = t.getSearchResults.bind(t)),
                t
              );
            }
            return (
              f()(i, n),
              u()(i, [
                {
                  key: 'getSearchResults',
                  value: function() {
                    var t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                      a = e(this.props),
                      n = this.props,
                      r = n.getGlobalSearchData,
                      i = n.getNextGlobalSearchData,
                      o = n.queries,
                      s = (n.count, n.deptId),
                      l = n.isFetchCategory,
                      c = void 0 !== l && l,
                      u = n.module,
                      d = n.pattern,
                      m = void 0 === d ? '1' : d,
                      p = n.list,
                      f = n.deSelectAll,
                      h = p.length,
                      g = t ? i : r,
                      v = t ? h : 0;
                    g({
                      queries: o,
                      isFetchCategory: c,
                      facets: a,
                      from: v,
                      limit: 50,
                      currModule: u,
                      deptId: s,
                      pattern: m
                    }),
                      !t && f();
                  }
                },
                {
                  key: 'renderList',
                  value: function() {
                    var e = this.props,
                      a = e.module,
                      n = e.selectedEntities,
                      i = void 0 === n ? [] : n,
                      o = e.onClickCheckbox,
                      s = e.deSelectAll,
                      l = e.deptId,
                      c = e.list,
                      u = e.moduleRequest,
                      d = e.moduleFailure,
                      m = e.disableFlip,
                      p = void 0 !== m && m,
                      f = e.count,
                      h = e.openEntity,
                      v = e.renderFooter,
                      b = l && 'allDepartment' === l,
                      y = e.renderModule || a,
                      _ = {
                        isAllDepartment: b,
                        onClickCheckbox: o,
                        module: y,
                        deSelectAll: s,
                        noNeedFlip:
                          p ||
                          ('allEntities' === y || 'community' === y) ||
                          (b && !t && !('contacts' === y || 'accounts' === y)),
                        isNoMoreData: f !== c.length,
                        deptId: l,
                        renderFooter: v,
                        openEntity: h
                      };
                    switch (y) {
                      case 'allEntities':
                        return g.a.createElement(
                          C.c,
                          r()(
                            {
                              list: c,
                              getEntitiesOnScroll: this.getSearchResults,
                              selectedEntities: i,
                              moduleRequest: u,
                              moduleFailure: d,
                              openEntity: h
                            },
                            _
                          )
                        );
                      case 'tickets':
                        return g.a.createElement(
                          A.e,
                          r()(
                            {
                              tickets: c,
                              getTicketsOffsetScroll: this.getSearchResults,
                              selectedTickets: i,
                              ticketRequest: u,
                              ticketFailure: d,
                              openTicket: h
                            },
                            _
                          )
                        );
                      case 'contacts':
                        return g.a.createElement(
                          C.d,
                          r()(
                            {
                              contacts: c,
                              getContactsOffsetScroll: this.getSearchResults,
                              selectedContacts: i,
                              contactRequest: u,
                              contactFailure: d,
                              listType: 'classic',
                              openContact: h
                            },
                            _
                          )
                        );
                      case 'accounts':
                        return g.a.createElement(
                          C.a,
                          r()(
                            {
                              accounts: c,
                              getAccountsOffsetScroll: this.getSearchResults,
                              selectedAccounts: i,
                              accountRequest: u,
                              accountFailure: d,
                              listType: 'classic',
                              openAccount: h
                            },
                            _
                          )
                        );
                      case 'tasks':
                        return g.a.createElement(
                          C.j,
                          r()(
                            {
                              tasks: c,
                              getTasksOffsetScroll: this.getSearchResults,
                              selectedTasks: i,
                              taskRequest: u,
                              taskFailure: d,
                              openTask: openTask
                            },
                            _
                          )
                        );
                      case 'products':
                        return g.a.createElement(
                          C.e,
                          r()(
                            {
                              products: c,
                              getProductsOffsetScroll: this.getSearchResults,
                              selectedProducts: i,
                              productRequest: u,
                              productFailure: d,
                              openProduct: h
                            },
                            _
                          )
                        );
                      default:
                        return null;
                    }
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props.moduleObject;
                    return g.a.createElement(
                      a,
                      r()(
                        {
                          renderList: this.renderList,
                          getSearchResults: this.getSearchResults,
                          moduleObject: e
                        },
                        this.props
                      )
                    );
                  }
                }
              ]),
              i
            );
          })(g.a.Component);
          (n.propTypes = {
            count: b.a.number,
            deSelectAll: b.a.func,
            deptId: b.a.string,
            disableFlip: b.a.bool,
            getGlobalSearchData: b.a.func,
            getNextGlobalSearchData: b.a.func,
            isFetchCategory: b.a.bool,
            list: b.a.array,
            module: b.a.string,
            moduleFailure: b.a.bool,
            moduleRequest: b.a.bool,
            onClickCheckbox: b.a.func,
            openEntity: b.a.func,
            pattern: b.a.string,
            queries: b.a.array,
            renderFooter: b.a.func,
            renderModule: b.a.string,
            selectedEntities: b.a.array
          }),
            (n.commonProps = { deSelectAll: function() {} });
          return Object(y.connect)(
            function(e, t) {
              var a = Object(S.a)(e, t),
                n = e.globalSearch,
                r = n.count,
                i = n.list,
                o = void 0 === i ? [] : i;
              return {
                moduleObject: a,
                moduleRequest: n.moduleRequest,
                moduleFailure: n.moduleFailure,
                count: r,
                list: o
              };
            },
            { getGlobalSearchData: _.g, getNextGlobalSearchData: _.h },
            null,
            { forwardRef: !0 }
          )(n);
        };
      }
    },
    463: function(e, t, a) {
      'use strict';
      var n = a(12),
        r = a.n(n),
        i = a(9),
        o = a.n(i),
        s = a(10),
        l = a.n(s),
        c = a(13),
        u = a.n(c),
        d = a(14),
        m = a.n(d),
        p = a(0),
        f = a.n(p),
        h = a(1),
        g = a.n(h),
        v = a(333),
        b = a(121),
        y = a(462),
        _ = a(66),
        C = a(8),
        A = (function(e) {
          function t() {
            return (
              o()(this, t),
              u()(this, (t.__proto__ || r()(t)).apply(this, arguments))
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  (0, this.props.getSearchResults)();
                }
              },
              {
                key: 'componentDidUpdate',
                value: function(e, t) {
                  var a = e.module,
                    n = e.deptId,
                    r = e.queries,
                    i = e.pattern,
                    o = void 0 === i ? '1' : i,
                    s = this.props,
                    l = s.module,
                    c = s.deptId,
                    u = s.queries,
                    d = s.pattern,
                    m = void 0 === d ? '1' : d,
                    p = s.getSearchResults;
                  (a.apiKey === l.apiKey &&
                    c === n &&
                    m === o &&
                    Object(_.j)(r, u)) ||
                    p();
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.renderList,
                    a = e.moduleRequest,
                    n = e.moduleFailure,
                    r = e.list,
                    i = e.moduleObject;
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    a
                      ? f.a.createElement(
                          v.a,
                          null,
                          f.a.createElement(
                            'div',
                            null,
                            f.a.createElement(b.a, null),
                            f.a.createElement(b.a, null),
                            f.a.createElement(b.a, null),
                            f.a.createElement(b.a, null),
                            f.a.createElement(b.a, null),
                            f.a.createElement(b.a, null),
                            f.a.createElement(b.a, null),
                            f.a.createElement(b.a, null),
                            f.a.createElement(b.a, null),
                            f.a.createElement(b.a, null),
                            f.a.createElement(b.a, null)
                          )
                        )
                      : n
                        ? f.a.createElement(
                            v.a,
                            null,
                            f.a.createElement(
                              'div',
                              null,
                              f.a.createElement(
                                'div',
                                null,
                                'Oops!!!!... an error occurred'
                              ),
                              f.a.createElement(
                                'div',
                                null,
                                'Back to list(click here!)'
                              )
                            )
                          )
                        : r.length > 0
                          ? t()
                          : f.a.createElement(
                              v.a,
                              null,
                              f.a.createElement(
                                'div',
                                null,
                                C.f.getI18NValue(
                                  'support.module.empty.message',
                                  i.displayLabel
                                )
                              )
                            )
                  );
                }
              }
            ]),
            t
          );
        })(f.a.Component);
      (A.propTypes = {
        deptId: g.a.string,
        getSearchResults: g.a.func,
        list: g.a.array,
        module: g.a.object,
        moduleFailure: g.a.bool,
        moduleRequest: g.a.bool,
        pattern: g.a.string,
        queries: g.a.array,
        renderList: g.a.func
      }),
        (t.a = Object(y.a)(function() {
          return [];
        }, !0)(A));
    },
    527: function(e, t, a) {
      e.exports = {
        stencil: 'Stencils-module__stencil',
        placeHolderShimmer: 'Stencils-module__placeHolderShimmer',
        rectangular: 'Stencils-module__rectangular Stencils-module__stencil',
        primary: 'Stencils-module__primary',
        secondary: 'Stencils-module__secondary',
        small: 'Stencils-module__small',
        default: 'Stencils-module__default',
        medium: 'Stencils-module__medium',
        large: 'Stencils-module__large',
        circle: 'Stencils-module__circle Stencils-module__stencil',
        clarge: 'Stencils-module__clarge',
        cmedium: 'Stencils-module__cmedium',
        cdefault: 'Stencils-module__cdefault',
        csmall: 'Stencils-module__csmall'
      };
    },
    616: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(12),
        r = a.n(n),
        i = a(9),
        o = a.n(i),
        s = a(10),
        l = a.n(s),
        c = a(13),
        u = a.n(c),
        d = a(14),
        m = a.n(d),
        p = a(0),
        f = a.n(p),
        h = a(1),
        g = a.n(h),
        v = a(26),
        b = a(75),
        y = a(1923),
        _ = a.n(y),
        C = a(16),
        A = a(265),
        S = a(1537),
        k = a(38),
        I = a.n(k),
        E = a(41),
        T = a.n(E),
        O = a(1924),
        x = a.n(O),
        N = a(32),
        L = a(994),
        P = a(463),
        M = a(2),
        w = a.n(M),
        j = a(23),
        D = a.n(j),
        R = a(8),
        F = a(65),
        B = a(19),
        V = a.n(B),
        U = a(66),
        z = a(1351),
        G = a(91),
        H = a(24),
        K = a(956),
        Y = a(1166),
        W = a(17),
        q = a(73),
        Z = a.n(q),
        $ = a(1449),
        J = a(1533),
        Q = a(151),
        X = a.n(Q),
        ee = a(235),
        te = a.n(ee),
        ae = a(63),
        ne = a.n(ae),
        re = a(1925),
        ie = a.n(re),
        oe = (a(3),
        (function(e) {
          function t(e) {
            o()(this, t);
            var a = u()(this, (t.__proto__ || r()(t)).call(this, e)),
              n = R.f.getI18NValue('support.label.click.to.select'),
              i = R.f.getI18NValue('None');
            return (
              (a.state = {
                patternEditable: !1,
                patternError: '',
                fieldConditions: [
                  {
                    condition: 'None',
                    fieldName: '-- Click to select --',
                    value: ['']
                  }
                ],
                pattern: '1',
                patternStr: ''
              }),
              (a.searchFields = {
                fields: {
                  '-- Click to select --': {
                    fieldLabel: '-- Click to select --',
                    i18NLabel: n,
                    type: 'text',
                    availableConditions: {
                      None: {
                        condition: 'None',
                        i18NCondition: i,
                        value: ['${CUSTOM}']
                      }
                    },
                    conditionsOrder: ['None']
                  }
                }
              }),
              (a.onFieldChange = a.onFieldChange.bind(a)),
              (a.onConditionChange = a.onConditionChange.bind(a)),
              (a.onCriteriaValueChange = a.onCriteriaValueChange.bind(a)),
              (a.onAddCriteria = a.onAddCriteria.bind(a)),
              (a.fieldLabels = [
                { fieldLabel: '-- Click to select --', i18NLabel: n }
              ]),
              (a.onRemoveCriteria = a.onRemoveCriteria.bind(a)),
              (a.onPatternUpdate = a.onPatternUpdate.bind(a)),
              (a.renderCriteriaFields = a.renderCriteriaFields.bind(a)),
              (a.onPatternEditToggle = a.onPatternEditToggle.bind(a)),
              (a.onPatternSave = a.onPatternSave.bind(a)),
              (a.onPatternChange = a.onPatternChange.bind(a)),
              (a.getAvailableFieldsAndConditions = a.getAvailableFieldsAndConditions.bind(
                a
              )),
              (a.getFieldCondition = a.getFieldCondition.bind(a)),
              (a.resetState = a.resetState.bind(a)),
              (a.onSearch = a.onSearch.bind(a)),
              a
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.getAvailableFieldsAndConditions();
                }
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  e.module !== this.props.module &&
                    (this.resetState(), this.getAvailableFieldsAndConditions());
                }
              },
              {
                key: 'getAvailableFieldsAndConditions',
                value: function() {
                  var e = this;
                  return (0, this.props.getSearchFields)().then(function(t) {
                    for (
                      var a = t.data,
                        n = void 0 === a ? {} : a,
                        r = n.fieldsOrder,
                        i = void 0 === r ? [] : r,
                        o = n.fields,
                        s = 0;
                      s < i.length;
                      s++
                    ) {
                      var l = i[s];
                      if ('All' !== l) {
                        var c = o[l],
                          u = c.fieldLabel,
                          d = c.i18NLabel;
                        e.fieldLabels = e.fieldLabels.concat({
                          fieldLabel: u,
                          i18NLabel: d
                        });
                      }
                    }
                    e.searchFields = n;
                    var m = T()(i, 1)[0],
                      p = e.getFieldCondition(m);
                    e.setState({ fieldConditions: [p] });
                  });
                }
              },
              {
                key: 'getFieldCondition',
                value: function(e, t) {
                  var a = this.searchFields.fields,
                    n = void 0 === a ? {} : a,
                    r = (n[e] || {}).conditionsOrder,
                    i = t || ((void 0 === r ? [] : r)[0] || ''),
                    o = Object(U.c)(n, e, i);
                  return {
                    condition: i,
                    fieldName: e,
                    value: o.value,
                    pickValues: o.pickValues
                  };
                }
              },
              {
                key: 'onFieldChange',
                value: function(e, t) {
                  var a = this.props.getTeamsList,
                    n = this.searchFields.fields;
                  'team' === (void 0 === n ? {} : n)[t].type && a();
                  var r = this.getFieldCondition(t);
                  this.setState(function(t) {
                    var a = t.fieldConditions;
                    return {
                      fieldConditions: [].concat(
                        D()(a.slice(0, e)),
                        [r],
                        D()(a.slice(e + 1))
                      )
                    };
                  });
                }
              },
              {
                key: 'onConditionChange',
                value: function(e, t) {
                  var a = this;
                  this.setState(function(n) {
                    var r = n.fieldConditions,
                      i = r[e].fieldName,
                      o = a.getFieldCondition(i, t);
                    return {
                      fieldConditions: [].concat(
                        D()(r.slice(0, e)),
                        [o],
                        D()(r.slice(e + 1))
                      )
                    };
                  });
                }
              },
              {
                key: 'onCriteriaValueChange',
                value: function(e, t) {
                  this.setState(function(a) {
                    var n = a.fieldConditions,
                      r = w()({}, n[e], { value: t });
                    return {
                      fieldConditions: [].concat(
                        D()(n.slice(0, e)),
                        [r],
                        D()(n.slice(e + 1))
                      )
                    };
                  });
                }
              },
              {
                key: 'onAddCriteria',
                value: function(e, t) {
                  t && t.preventDefault();
                  var a = this.state.patternEditable,
                    n = this.props.showConfirmBox,
                    r = this.state,
                    i = r.pattern,
                    o = void 0 === i ? '1' : i,
                    s = r.fieldConditions,
                    l = (void 0 === s ? [] : s).length || 0,
                    c = Object(z.d)(o),
                    u = R.f.getI18NValue;
                  if (
                    ((c =
                      l > 1
                        ? ('(' === c[0] ? '' : '(') +
                          c +
                          (')' === c[c.length - 1] ? '' : ')')
                        : c),
                    (c = 0 !== l ? '(' + c + e + (l + 1) + ')' : c),
                    a)
                  )
                    n({
                      submitText: u('crm.button.ok'),
                      title: u('support.history.operation.label.wfalert'),
                      confirmationMessage: Object(R.e)(
                        u,
                        'suport.label.criteria.changing.alert'
                      ),
                      isActive: !0,
                      palette: 'danger'
                    });
                  else if (l >= 25)
                    n({
                      submitText: u('crm.button.ok'),
                      title: u('support.history.operation.label.wfalert'),
                      confirmationMessage: 'Criteria limit only 25!',
                      isActive: !0,
                      palette: 'danger'
                    });
                  else {
                    var d = this.searchFields.fieldsOrder,
                      m = T()(d, 1)[0],
                      p = this.getFieldCondition(m);
                    this.setState(function(e) {
                      return {
                        fieldConditions: [].concat(D()(e.fieldConditions), [p]),
                        pattern: c
                      };
                    });
                  }
                }
              },
              {
                key: 'onRemoveCriteria',
                value: function(e) {
                  var t = this.props.showConfirmBox,
                    a = this.state,
                    n = a.pattern,
                    r = void 0 === n ? '1' : n,
                    i = a.fieldConditions,
                    o = void 0 === i ? [] : i,
                    s = a.patternEditable,
                    l = R.f.getI18NValue,
                    c = Object(z.f)(e, r);
                  (c = 2 === o.length ? '1' : r),
                    s &&
                      t({
                        submitText: l('crm.button.ok'),
                        title: l('support.history.operation.label.wfalert'),
                        confirmationMessage: Object(R.e)(
                          l,
                          'suport.label.criteria.changing.alert'
                        ),
                        isActive: !0,
                        palette: 'danger'
                      }),
                    s ||
                      this.setState(function(t) {
                        var a = t.fieldConditions,
                          n = void 0 === a ? [] : a;
                        return {
                          fieldConditions: [].concat(
                            D()(n.slice(0, e)),
                            D()(n.slice(e + 1))
                          ),
                          pattern: c
                        };
                      });
                }
              },
              {
                key: 'onPatternUpdate',
                value: function(e, t, a) {
                  a && a.preventDefault();
                  var n = this.state.pattern,
                    r = Object(z.d)(n),
                    i = r.match(/(and|or)/gi);
                  i[e] = t;
                  var o = r.replace(/(and|or)/g, '#').split('#'),
                    s = i.reduce(function(e, t, a) {
                      return 0 === a
                        ? e + o[a] + t + o[a + 1]
                        : e + t + o[a + 1];
                    }, '');
                  this.setState({ pattern: s });
                }
              },
              {
                key: 'onPatternChange',
                value: function(e, t) {
                  t && t.preventDefault(), this.setState({ patternStr: e });
                }
              },
              {
                key: 'onPatternCancel',
                value: function() {
                  this.setState({ patternStr: pattern });
                }
              },
              {
                key: 'onPatternEditToggle',
                value: function() {
                  var e = this.state.pattern,
                    t = Object(z.c)(e);
                  this.setState(function(a) {
                    return a.patternEditable
                      ? { patternStr: t, patternEditable: !1, patternError: '' }
                      : { patternStr: e, patternEditable: !0 };
                  });
                }
              },
              {
                key: 'onPatternSave',
                value: function() {
                  var e = this,
                    t = this.state,
                    a = t.patternStr,
                    n = t.fieldConditions,
                    r = Object(z.e)(a, n.length),
                    i = r.errorMessage,
                    o = r.isValid,
                    s = r.pattern;
                  o
                    ? this.setState({ pattern: s }, function() {
                        return e.onPatternEditToggle();
                      })
                    : this.setState({ patternError: i });
                }
              },
              {
                key: 'onSearch',
                value: function() {
                  var e = this.state,
                    t = e.fieldConditions,
                    a = e.pattern,
                    n = this.props.saveQueries,
                    r = Object(U.n)(t, this.searchFields.fields),
                    i = r.isValid,
                    o = void 0 !== i && i,
                    s = r.alertMessage,
                    l = r.criteriaField;
                  r.errorFieldIndex;
                  if (o) {
                    n(
                      t.map(function(e) {
                        return {
                          fieldName: e.fieldName,
                          value: e.value,
                          condition: e.condition
                        };
                      }),
                      a
                    );
                  } else {
                    var c = this.props.showConfirmBox,
                      u = R.f.getI18NValue;
                    c(
                      l
                        ? {
                            submitText: u('crm.button.ok'),
                            title: u('support.history.operation.label.wfalert'),
                            confirmationMessage: u(s, l),
                            isActive: !0,
                            palette: 'danger'
                          }
                        : {
                            submitText: u('crm.button.ok'),
                            title: u('support.history.operation.label.wfalert'),
                            confirmationMessage: u(s),
                            isActive: !0,
                            palette: 'danger'
                          }
                    );
                  }
                }
              },
              {
                key: 'resetState',
                value: function() {
                  this.setState({
                    patternEditable: !1,
                    patternError: '',
                    pattern: '1',
                    fieldConditions: []
                  });
                }
              },
              {
                key: 'renderCriteriaFields',
                value: function() {
                  var e = this.searchFields.fields,
                    t = void 0 === e ? {} : e,
                    a = this.state,
                    n = a.fieldConditions,
                    r = void 0 === n ? [] : n,
                    i = (a.patternEditable, a.pattern),
                    o = this.props,
                    s = o.teamsList,
                    l = o.timeZone,
                    c = Object(z.d)(i).match(/(and|or)/g) || [];
                  if (((i = i), r.length)) {
                    for (var u = [], d = 0; d < r.length; d++) {
                      for (
                        var m = r[d],
                          p = m.condition,
                          h = m.fieldName,
                          g = m.value,
                          v = m.pickValues,
                          b = t[h] || {},
                          y = b.conditionsOrder,
                          _ = void 0 === y ? [] : y,
                          C = b.availableConditions,
                          A = b.type,
                          S = [],
                          k = 0;
                        k < _.length;
                        k++
                      ) {
                        var I = C[_[k]],
                          E = I.condition,
                          T = I.i18NCondition;
                        S.push({ condition: E, i18NCondition: T });
                      }
                      var O = c[d],
                        x = f.a.createElement(
                          'div',
                          { key: 'criteria' + d, className: ie.a.criteria },
                          f.a.createElement(J.a, {
                            roleNo: d + 1,
                            criteriaIndex: d,
                            isDeleteCriteria: r.length > 1,
                            fieldDisable: !1,
                            fields: this.fieldLabels,
                            selectedField: h,
                            conditionDisable: !1,
                            conditions: S,
                            SelectedCondition: p,
                            operator: O,
                            value: g,
                            pickValues: v,
                            teamsList: s,
                            valueType: A,
                            timeZone: l,
                            onFieldChange: this.onFieldChange,
                            onConditionChange: this.onConditionChange,
                            onDeleteCriteria: this.onRemoveCriteria,
                            onAddCriteria: this.onAddCriteria,
                            onUpdateCriteriaOperator: this.onPatternUpdate,
                            onValueChange: this.onCriteriaValueChange
                          })
                        );
                      u.push(x);
                    }
                    return u;
                  }
                  return null;
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state,
                    t = e.patternEditable,
                    a = e.pattern,
                    n = e.patternError,
                    r = e.patternStr;
                  a = a;
                  var i = R.f.getI18NValue;
                  return f.a.createElement(
                    C.Container,
                    null,
                    f.a.createElement(
                      C.Box,
                      { flexible: !0 },
                      f.a.createElement(
                        F.Card,
                        null,
                        f.a.createElement(
                          F.CardContent,
                          null,
                          f.a.createElement(
                            'div',
                            { className: '' + ie.a.custview },
                            f.a.createElement(
                              'div',
                              { className: ie.a.criteriaLabel },
                              f.a.createElement(X.a, {
                                text: i('support.globalsearch.advanced.link'),
                                palette: 'primary',
                                size: 'medium',
                                type: 'subtitle'
                              })
                            ),
                            f.a.createElement(
                              $.a,
                              null,
                              this.renderCriteriaFields()
                            ),
                            f.a.createElement(
                              'div',
                              { className: ie.a.criteriaPattern },
                              f.a.createElement(
                                'span',
                                { className: ie.a.ctPrtnTx },
                                i('support.label.criteria.pattern')
                              ),
                              t
                                ? f.a.createElement(
                                    'div',
                                    { className: ie.a.patternEdit },
                                    f.a.createElement(
                                      'div',
                                      { className: ie.a.patternEditCont },
                                      f.a.createElement(te.a, {
                                        text: r,
                                        onChange: this.onPatternChange,
                                        size: 'large'
                                      }),
                                      n
                                        ? f.a.createElement(
                                            'span',
                                            { className: ie.a.errorMsg },
                                            i(n)
                                          )
                                        : null
                                    ),
                                    f.a.createElement(
                                      'div',
                                      null,
                                      f.a.createElement(
                                        'span',
                                        {
                                          className: ie.a.patternSave,
                                          onClick: this.onPatternSave
                                        },
                                        i('support.button.save')
                                      ),
                                      f.a.createElement(
                                        'span',
                                        {
                                          className: ie.a.patternCancel,
                                          onClick: this.onPatternEditToggle
                                        },
                                        i('support.label.cancel')
                                      )
                                    )
                                  )
                                : f.a.createElement(
                                    'span',
                                    {
                                      className:
                                        ie.a.pattrenEditTx + ' ' + ie.a.fsm
                                    },
                                    Object(z.c)(a)
                                  ),
                              a && '1' !== a && !t
                                ? f.a.createElement(
                                    'span',
                                    {
                                      className:
                                        ie.a.pattrenEditBtn + ' ' + ie.a.fsm,
                                      onClick: this.onPatternEditToggle
                                    },
                                    f.a.createElement(ne.a, {
                                      name: 'pen2',
                                      size: '14'
                                    })
                                  )
                                : null
                            ),
                            f.a.createElement(
                              'div',
                              { className: ie.a.radiosec },
                              f.a.createElement(Z.a, {
                                text: i('crm.label.search'),
                                palette: 'primaryFilled',
                                onClick: this.onSearch,
                                disabled: t
                              })
                            )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(p.Component));
      oe.propTypes = {
        getSearchFields: g.a.func,
        getTeamsList: g.a.func,
        module: g.a.string,
        saveQueries: g.a.func,
        showConfirmBox: g.a.func,
        teamsList: g.a.array,
        timeZone: g.a.string
      };
      var se = Object(v.connect)(
          function(e) {
            var t = e.module,
              a = Object(W.r)(e),
              n = t.agent,
              r = Object(W.m)(e);
            r = r.substring(0, r.length - 1);
            var i = Object(W.L)(e);
            return {
              module: r,
              deptId: a,
              timeZone: V()('myInfo.timeZone', e),
              agents: n,
              namePattern: i,
              teamsList: Object(W.bb)(e)
            };
          },
          {
            getSearchFields: G.k,
            push: H.K,
            goBack: b.goBack,
            showConfirmBox: H.a.showConfirmBox,
            getTeamsList: H.u,
            getAgentDetails: K.c,
            getRoleDetails: Y.a
          }
        )(oe),
        le = a(1337),
        ce = a(1338),
        ue = a(1339),
        de = a(1311),
        me = a(1089),
        pe = a(1270),
        fe = a(1926),
        he = a.n(fe),
        ge = a(1015),
        ve = a(950),
        be = a(1224),
        ye = a(1173),
        _e = (function(e) {
          function t() {
            return (
              o()(this, t),
              u()(this, (t.__proto__ || r()(t)).apply(this, arguments))
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.selectAll,
                    a = e.deSelectAll,
                    n = e.onMassDelete,
                    r = e.selectedItems,
                    i = e.isAllSelectedInPage,
                    o = e.massUpdatePopup,
                    s = r.length,
                    l = R.f.getI18NValue,
                    c = l(i ? 'Deselect All' : 'Select All');
                  return f.a.createElement(
                    ge.a,
                    { type: 'primary' },
                    f.a.createElement(ve.a, {
                      count: s,
                      icon: 'check',
                      text: c,
                      iconSize: '14',
                      onClick: i ? a : t
                    }),
                    f.a.createElement(be.e, {
                      updatePopup: o,
                      updateClass: he.a.box
                    }),
                    f.a.createElement(ye.a, {
                      icon: 'delete2',
                      text: l('Delete'),
                      iconSize: '13',
                      onClick: n
                    })
                  );
                }
              }
            ]),
            t
          );
        })(f.a.Component),
        Ce = _e;
      _e.propTypes = {
        deSelectAll: g.a.func,
        isAllSelectedInPage: g.a.bool,
        massUpdatePopup: g.a.element,
        onMassDelete: g.a.func,
        selectAll: g.a.func,
        selectedItems: g.a.array
      };
      var Ae = a(1343),
        Se = a(1020),
        ke = a(1067);
      var Ie,
        Ee,
        Te = ((Ie = Ce),
        ((Ee = (function(e) {
          function t(e) {
            o()(this, t);
            var a = u()(this, (t.__proto__ || r()(t)).call(this, e));
            return (
              (a.onMassDelete = ke.b.bind(a, 'products')),
              (a.afterUpdate = a.afterUpdate.bind(a)),
              a
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'afterUpdate',
                value: function() {
                  var e = this.props,
                    t = e.afterUpdate,
                    a = e.deSelectAll,
                    n = e.getOffsetScroll;
                  a(), t ? t() : n();
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.selectedItems,
                    t = f.a.createElement(Se.c, {
                      moduleName: 'products',
                      page: 'productListMassAssign',
                      selectedRecords: e,
                      afterUpdate: this.afterUpdate
                    });
                  return f.a.createElement(
                    Ie,
                    I()(
                      { onMassDelete: this.onMassDelete, massUpdatePopup: t },
                      this.props
                    )
                  );
                }
              }
            ]),
            t
          );
        })(f.a.Component)).propTypes = {
          deSelectAll: g.a.func,
          deleteItem: g.a.func,
          deptId: g.a.string,
          getOffsetScroll: g.a.func,
          moduleMeta: g.a.object,
          openLookUp: g.a.func,
          pushMergeInfo: g.a.func,
          selectedCount: g.a.number,
          selectedItems: g.a.number,
          showConfirmBox: g.a.func
        }),
        Object(v.connect)(
          function(e, t) {
            return {
              moduleMeta: e.moduleMeta,
              deptId: e.routing.paramMap.deptId
            };
          },
          {
            showMessage: H.Q,
            showConfirmBox: H.a.showConfirmBox,
            deleteItem: Ae.a
          }
        )(Ee)),
        Oe = (function(e) {
          function t(e) {
            o()(this, t);
            var a = u()(this, (t.__proto__ || r()(t)).call(this, e));
            return (
              (a.renderMassAction = a.renderMassAction.bind(a)),
              (a.getEntitiesOnScroll = a.getEntitiesOnScroll.bind(a)),
              (a.onRefreshClick = a.onRefreshClick.bind(a)),
              (a.listRef = f.a.createRef()),
              a
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'getEntitiesOnScroll',
                value: function() {
                  var e = this.listRef.current;
                  e && e.getSearchResults();
                }
              },
              {
                key: 'onRefreshClick',
                value: function() {
                  (0, this.props.disableMessage)(), this.getEntitiesOnScroll();
                }
              },
              {
                key: 'renderMassAction',
                value: function() {
                  var e = this.props,
                    t = e.searchModule,
                    a = (e.list, e.department),
                    n = e.listProps,
                    r = e.enableMessage,
                    i = T()(n, 5),
                    o = i[0],
                    s = void 0 === o ? [] : o,
                    l = i[2],
                    c = i[3],
                    u = i[4],
                    d = {
                      selectAll: l,
                      deSelectAll: c,
                      isAllDepartment: 'allDepartment' === a,
                      afterUpdate: r
                    },
                    m = s.length;
                  switch (t) {
                    case 'tickets':
                      return f.a.createElement(
                        le.a,
                        I()(
                          {
                            isAllTicketSelectedInPage: u,
                            selectedItems: s,
                            getOffsetScroll: this.getEntitiesOnScroll
                          },
                          d
                        )
                      );
                    case 'contacts':
                      return f.a.createElement(
                        ce.a,
                        I()(
                          {
                            isAllSelectedInPage: u,
                            selectedItems: s,
                            getOffsetScroll: this.getEntitiesOnScroll
                          },
                          d
                        )
                      );
                    case 'accounts':
                      return f.a.createElement(
                        ue.a,
                        I()(
                          {
                            isAllSelectedInPage: u,
                            selectedItems: s,
                            getOffsetScroll: this.getEntitiesOnScroll
                          },
                          d
                        )
                      );
                    case 'tasks':
                      return f.a.createElement(
                        de.a,
                        I()(
                          {
                            isAllTasksSelected: u,
                            selectedTasksLength: m,
                            selectedTasks: s,
                            getTasksOffsetScroll: this.getEntitiesOnScroll
                          },
                          d
                        )
                      );
                    case 'products':
                      s.length;
                      return f.a.createElement(
                        Te,
                        I()(
                          {
                            isAllSelectedInPage: u,
                            selectedItems: s,
                            getOffsetScroll: this.getEntitiesOnScroll
                          },
                          d
                        )
                      );
                    default:
                      return f.a.createElement('div', null, 'On progress... ');
                  }
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.department,
                    a = e.searchModule,
                    n = e.saveQueries,
                    r = e.queries,
                    i = e.pattern,
                    o = e.listProps,
                    s = e.getMessage,
                    l = T()(o, 4),
                    c = l[0],
                    u = void 0 === c ? [] : c,
                    d = l[1],
                    m = l[3];
                  return f.a.createElement(
                    C.Container,
                    null,
                    f.a.createElement(
                      C.Box,
                      { flexible: !0 },
                      f.a.createElement(se, { module: a, saveQueries: n })
                    ),
                    r.length > 0 &&
                      f.a.createElement(
                        C.Box,
                        { flexible: !0 },
                        f.a.createElement(
                          L.c,
                          null,
                          f.a.createElement(
                            C.Container,
                            { className: x.a.container },
                            f.a.createElement(
                              C.Box,
                              null,
                              f.a.createElement(
                                'span',
                                { className: x.a.title },
                                R.f.getI18NValue(
                                  'support.globalsearch.search.results'
                                )
                              )
                            )
                          ),
                          u.length > 0 && '0' !== t && this.renderMassAction()
                        ),
                        s(this.onRefreshClick),
                        f.a.createElement(
                          L.d,
                          null,
                          f.a.createElement(P.a, {
                            deptId: t,
                            selectedEntities: u,
                            onClickCheckbox: d,
                            deSelectAll: m,
                            module: a,
                            queries: r,
                            pattern: i,
                            ref: this.listRef
                          })
                        )
                      )
                  );
                }
              }
            ]),
            t
          );
        })(p.Component);
      (Oe.propTypes = {
        deSelectAll: g.a.func,
        department: g.a.string,
        deptName: g.a.string,
        disableMessage: g.a.func,
        enableMessage: g.a.func,
        getGlobalSearchData: g.a.func,
        getMessage: g.a.func,
        goBack: g.a.func,
        list: g.a.array,
        listProps: g.a.array,
        navigateAway: g.a.func,
        onClickCheckbox: g.a.func,
        orgName: g.a.string,
        searchDept: g.a.string,
        searchModule: g.a.string,
        searchModules: g.a.array,
        searchWord: g.a.string,
        selectAll: g.a.func,
        selectedEntities: g.a.array
      }),
        (Oe.defaultProps = { deSelectAll: function() {} });
      var xe = Object(N.d)(
          Object(v.connect)(
            function(e, t) {
              var a = Object(W.r)(e),
                n = e.globalSearch.list;
              return { department: a, list: void 0 === n ? [] : n };
            },
            { goBack: b.goBack }
          ),
          Object(me.a)(function(e) {
            return e.list;
          }),
          Object(pe.a)()
        )(Oe),
        Ne = a(132),
        Le = (function(e) {
          function t(e) {
            o()(this, t);
            var a = u()(this, (t.__proto__ || r()(t)).call(this, e));
            return (
              (a.state = { queries: [], pattern: '1' }),
              (a.getLeftPanel = a.getLeftPanel.bind(a)),
              (a.getRightPanel = a.getRightPanel.bind(a)),
              (a.moduleIconMapper = Object(U.e)()),
              (a.changeListModule = a.changeListModule.bind(a)),
              (a.onBackClick = a.onBackClick.bind(a)),
              (a.saveQueries = a.saveQueries.bind(a)),
              a
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'saveQueries',
                value: function(e, t) {
                  this.setState({ queries: e, pattern: t });
                }
              },
              {
                key: 'changeListModule',
                value: function(e) {
                  var t = this.props,
                    a = t.deptName,
                    n = t.orgName,
                    r = t.push,
                    i = t.searchModules,
                    o = '';
                  for (var s in i) {
                    var l = i[s],
                      c = l.apiKey,
                      u = l.sanitizedName;
                    c === e && (o = u);
                  }
                  this.setState({ queries: [], pattern: '1' }),
                    r({ pathname: '/' + n + '/' + a + '/' + o + '/advSearch' });
                }
              },
              {
                key: 'onBackClick',
                value: function() {
                  (0, this.props.goBack)();
                }
              },
              {
                key: 'getLeftPanel',
                value: function() {
                  var e = this.props,
                    t = e.searchModule,
                    a = e.searchModules;
                  return f.a.createElement(S.a, {
                    searchModule: t,
                    searchModules: a,
                    moduleIconMapper: this.moduleIconMapper,
                    onClick: this.changeListModule,
                    onBackClick: this.onBackClick
                  });
                }
              },
              {
                key: 'getRightPanel',
                value: function() {
                  var e = this.props.searchModule,
                    t = this.state,
                    a = t.queries,
                    n = t.pattern;
                  return f.a.createElement(xe, {
                    searchModule: e,
                    queries: a,
                    pattern: n,
                    saveQueries: this.saveQueries
                  });
                }
              },
              {
                key: 'render',
                value: function() {
                  return f.a.createElement(
                    C.Container,
                    { className: _.a.container },
                    f.a.createElement(
                      C.Box,
                      { flexible: !0 },
                      f.a.createElement(A.a, {
                        getLeftPanel: this.getLeftPanel,
                        getRightPanel: this.getRightPanel,
                        needShrink: !1
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(p.Component);
      Le.propTypes = {
        deptName: g.a.string,
        goBack: g.a.func,
        orgName: g.a.string,
        push: g.a.func,
        searchModule: g.a.string,
        searchModules: g.a.array
      };
      t.default = Object(v.connect)(
        function() {
          var e = Object(Ne.c)(!0);
          return function(t) {
            var a = e(t).searchModules,
              n = t.routing.paramMap,
              r = n.deptName,
              i = n.orgName,
              o = Object(W.m)(t);
            return {
              searchModule: Object(U.i)(o) ? o : 'tickets',
              searchModules: a,
              deptName: r,
              orgName: i
            };
          };
        },
        { push: H.K, goBack: b.goBack }
      )(Le);
    },
    946: function(e, t, a) {
      e.exports = {
        agentCont: 'agentPopup-module__agentCont',
        assignLayout: 'agentPopup-module__assignLayout',
        teamAgentLayout: 'agentPopup-module__teamAgentLayout',
        mactionTxt: 'agentPopup-module__mactionTxt',
        statusItem: 'agentPopup-module__statusItem',
        pointer: 'agentPopup-module__pointer',
        agentSearch: 'agentPopup-module__agentSearch',
        unAssign: 'agentPopup-module__unAssign',
        unAsgnTxt: 'agentPopup-module__unAsgnTxt',
        unAssignIcn: 'agentPopup-module__unAssignIcn',
        popupCont: 'agentPopup-module__popupCont',
        followerCont:
          'agentPopup-module__followerCont common-module__dflex common-module__flexrow common-module__alignVertical',
        dropIcon: 'agentPopup-module__dropIcon',
        followText: 'agentPopup-module__followText common-module__offSelection',
        focused: 'agentPopup-module__focused',
        ownerIcon: 'agentPopup-module__ownerIcon',
        mactionCheck: 'agentPopup-module__mactionCheck',
        notAllow: 'agentPopup-module__notAllow',
        agent: 'agentPopup-module__agent',
        bluePrintLayar: 'agentPopup-module__bluePrintLayar',
        none: 'agentPopup-module__none',
        massAct: 'agentPopup-module__massAct',
        empty: 'agentPopup-module__empty',
        agentTxt: 'agentPopup-module__agentTxt',
        agentTxtActive: 'agentPopup-module__agentTxtActive'
      };
    },
    947: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = (function() {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var n = t[a];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function(t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t;
          };
        })(),
        r = l(a(0)),
        i = l(a(1)),
        o = l(a(953)),
        s = l(a(151));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var a = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (a.onChange = a.onChange.bind(a)), a;
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, r.default.Component),
          n(t, [
            {
              key: 'onChange',
              value: function(e) {
                var t = this.props,
                  a = t.onChange,
                  n = t.checked;
                a && a(!n, e);
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.id,
                  a = e.name,
                  n = e.checked,
                  i = e.disabled,
                  l = e.palette,
                  c = e.text,
                  u = e.labelPalette,
                  d = e.active,
                  m = e.labelSize,
                  p = e.getRef,
                  f = e.dataId,
                  h = d ? o.default[l + '_active'] : '',
                  g = i ? o.default.disabled : o.default.pointer;
                return r.default.createElement(
                  'span',
                  {
                    className:
                      o.default.container +
                      ' ' +
                      g +
                      ' ' +
                      (c ? o.default.layout : o.default.basic) +
                      ' '
                  },
                  r.default.createElement('input', {
                    type: 'checkbox',
                    className:
                      o.default.input + ' ' + (n ? o.default.checked : ''),
                    name: a,
                    checked: n,
                    disabled: i,
                    ref: p
                  }),
                  r.default.createElement(
                    'label',
                    {
                      className:
                        o.default['label_' + l] +
                        ' ' +
                        h +
                        ' ' +
                        (c ? o.default.layoutshrink : ''),
                      onClick: this.onChange,
                      'data-id': f
                    },
                    r.default.createElement('span', null)
                  ),
                  c &&
                    r.default.createElement(
                      'span',
                      { className: o.default.text },
                      r.default.createElement(s.default, {
                        text: c,
                        palette: u,
                        id: t,
                        size: m,
                        type: 'title',
                        clipped: !0,
                        onClick: this.onChange
                      })
                    )
                );
              }
            }
          ]),
          t
        );
      })();
      (t.default = c),
        (c.defaultProps = {
          active: !1,
          checked: !1,
          disabled: !1,
          labelPalette: 'default',
          labelSize: 'medium',
          palette: 'primary'
        }),
        (c.propTypes = {
          active: i.default.bool,
          checked: i.default.bool,
          dataId: i.default.string,
          disabled: i.default.bool,
          getRef: i.default.func,
          id: i.default.string.isRequired,
          labelPalette: i.default.oneOf([
            'default',
            'primary',
            'secondary',
            'danger',
            'mandatory'
          ]),
          labelSize: i.default.oneOf(['small', 'medium', 'large']),
          name: i.default.string,
          onChange: i.default.func,
          palette: i.default.oneOf(['primary', 'danger']),
          text: i.default.string
        }),
        (c.propTypesDescription = {
          disabled: ' ',
          checked: ' ',
          active: ' ',
          labelPalette: ' ',
          labelSize: ' ',
          getRef: ' ',
          palette: ' ',
          onChange: ' ',
          text: ' '
        });
    },
    948: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = a(961);
      Object.defineProperty(t, 'licensePermissionCheckHOC', {
        enumerable: !0,
        get: function() {
          return n.licensePermissionCheckHOC;
        }
      }),
        Object.defineProperty(t, 'urlLicensePermissionCheckHOC', {
          enumerable: !0,
          get: function() {
            return n.urlLicensePermissionCheckHOC;
          }
        });
      var r = a(963);
      Object.defineProperty(t, 'RestrictionValidator', {
        enumerable: !0,
        get: function() {
          return ((e = r), e && e.__esModule ? e : { default: e }).default;
          var e;
        }
      });
      var i = a(955);
      Object.defineProperty(t, 'getRestriction', {
        enumerable: !0,
        get: function() {
          return i.getRestriction;
        }
      });
    },
    949: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.SelectComponent = void 0);
      var n = (function() {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var n = t[a];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function(t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t;
          };
        })(),
        r = a(0),
        i = y(r),
        o = y(a(1)),
        s = y(a(80)),
        l = y(a(72)),
        c = y(a(234)),
        u = y(a(99)),
        d = a(202),
        m = y(d),
        p = y(a(236)),
        f = y(a(237)),
        h = y(a(957)),
        g = y(a(63)),
        v = a(358),
        b = a(201);
      function y(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var _ = [],
        C = (t.SelectComponent = (function(e) {
          function t(e) {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t);
            var a = (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ('object' != typeof t && 'function' != typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            (a.getFilterSuggestions = (0,
            v.makeGetMultiSelectFilterSuggestions)()),
              (a.formatOptions = (0, v.makeFormatOptions)()),
              (a.getSelectedValue = (0, v.makeGetSelectedValueText)()),
              (a.selectedFormatOptions = {});
            var n = e.selectedValue,
              r = e.searchDebounceTime,
              i = void 0 === r ? 500 : r,
              o = e.isDefaultSelectValue,
              s = a.handleFormatOptions(a.props),
              l = s.allOptions,
              c = s.normalizedAllOptions,
              u = s.optionsOrder,
              d = s.normalizedFormatOptions,
              m = a.getSelectedValue({
                optionsOrder: u,
                selectedValue: n,
                normalizedFormatOptions: d,
                selectedFormatOptions: a.selectedFormatOptions,
                isDefaultSelectValue: o
              }),
              p = m.selected,
              f = m.hoverIndex,
              h = m.selectedValueDetails,
              g = m.selectedId;
            m.isSelfValueChanged;
            return (
              (a.state = {
                selected: p,
                options: l,
                optionsNormalize: c,
                hoverIndex: f,
                searchStr: '',
                isFetchingOptions: !1,
                selectedId: g,
                selectedValueIndex: f
              }),
              (a.optionsOrder = u),
              (a._isMounted = !1),
              (a.normalizedFormatOptions = d),
              (a.allSelectedOptions = h),
              (a.handleChange = a.handleChange.bind(a)),
              (a.handleKeyDown = a.handleKeyDown.bind(a)),
              (a.handleSearch = a.handleSearch.bind(a)),
              (a.handleFilterSuggestions = a.handleFilterSuggestions.bind(a)),
              (a.handleMouseEnter = a.handleMouseEnter.bind(a)),
              (a.handleFetchOptions = a.handleFetchOptions.bind(a)),
              (a.handleGetNextOptions = a.handleGetNextOptions.bind(a)),
              (a.handleScroll = a.handleScroll.bind(a)),
              (a.handleSearchOptions = (0, b.debounce)(
                a.handleSearchOptions.bind(a),
                i
              )),
              (a.suggestionContainerRef = a.suggestionContainerRef.bind(a)),
              (a.suggestionItemRef = a.suggestionItemRef.bind(a)),
              (a.searchInputRef = a.searchInputRef.bind(a)),
              (a.valueInputRef = a.valueInputRef.bind(a)),
              (a.togglePopup = a.togglePopup.bind(a)),
              (a.handleSelectFocus = a.handleSelectFocus.bind(a)),
              (a.handleFormatOptions = a.handleFormatOptions.bind(a)),
              (a.handlePopupClose = a.handlePopupClose.bind(a)),
              (a.handleClearSearch = a.handleClearSearch.bind(a)),
              a
            );
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, r.Component),
            n(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this._isMounted = !0;
                }
              },
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  var t = e.selectedValue,
                    a = e.isDefaultSelectValue,
                    n = this.state.hoverIndex,
                    r = this.handleFormatOptions(e),
                    i = r.allOptions,
                    o = r.normalizedAllOptions,
                    s = r.optionsOrder,
                    l = r.normalizedFormatOptions,
                    c = this.selectedFormatOptions,
                    u = this.getSelectedValue({
                      optionsOrder: s,
                      selectedValue: t,
                      normalizedFormatOptions: l,
                      selectedFormatOptions: c,
                      isDefaultSelectValue: a
                    }),
                    d = u.selected,
                    m = u.hoverIndex,
                    p = u.selectedValueDetails,
                    f = u.selectedId;
                  u.isSelfValueChanged, this.props.selectedValue;
                  (this.selectedFormatOptions = Object.assign(c, p)),
                    (this.normalizedFormatOptions = l),
                    (this.optionsOrder = s),
                    this.setState({
                      options: i,
                      optionsNormalize: o,
                      selected: d,
                      hoverIndex: n || m,
                      selectedId: f,
                      selectedValueIndex: m
                    });
                }
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  var t = this,
                    a = this.suggestionContainer,
                    n = this.optionsOrder,
                    r = this.isSelectWithAvatarComponent,
                    i = this.state,
                    o = i.hoverIndex,
                    s = i.searchStr,
                    l = i.selectedValueIndex,
                    c = this.props,
                    u = c.needLocalSearch,
                    d = c.onDropBoxClose,
                    m = c.onDropBoxOpen,
                    p = c.needSearch,
                    f = c.onSearch,
                    h = c.isPopupOpen,
                    g = this[
                      'suggestion_' + ((0, b.getIsEmptyValue)(n[o]) ? '' : n[o])
                    ];
                  h && (0, b.scrollTo)(a, g),
                    e.isPopupOpen !== h &&
                      (h
                        ? (m && this.handleFetchOptions(m, s),
                          setTimeout(function() {
                            t.searchInput && t.searchInput.focus();
                          }, 10))
                        : (p && this.valueInput && this.valueInput.focus(),
                          d && d(),
                          f && f(''),
                          this.setState({
                            searchStr: r ? s : '',
                            hoverIndex: l
                          })));
                  var v = this.props,
                    y = v.isNextOptions,
                    _ = v.getNextOptions,
                    C = (h ? this.handleFilterSuggestions() : []).length;
                  h && C <= 5 && y && _ && !u && this.handleFetchOptions(_, s);
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this._isMounted = !1;
                }
              },
              {
                key: 'handleFormatOptions',
                value: function(e) {
                  var t = e.options,
                    a = e.valueField,
                    n = e.textField;
                  return this.formatOptions({
                    options: t,
                    valueField: a,
                    textField: n
                  });
                }
              },
              {
                key: 'handleChange',
                value: function(e, t, a, n) {
                  n && n.preventDefault && n.preventDefault();
                  var r = this.props,
                    i = r.onChange,
                    o = r.isReadOnly,
                    s = this.state.optionsNormalize;
                  !o && i && i(e, s[e]),
                    this.valueInput && this.valueInput.focus(),
                    this.handlePopupClose(n);
                }
              },
              {
                key: 'handleKeyDown',
                value: function(e) {
                  var t = this.props,
                    a = t.onChange,
                    n = t.isPopupOpen,
                    r = this.state,
                    i = r.hoverIndex,
                    o = r.optionsNormalize,
                    s = this.handleFilterSuggestions(),
                    l = e.keyCode;
                  if (
                    (n &&
                      (38 === l || 40 === l) &&
                      e.preventDefault &&
                      e.preventDefault(),
                    38 === l && n && s.length)
                  )
                    0 === i || (i -= 1), this.setState({ hoverIndex: i });
                  else if (40 === l && n && s.length)
                    i === s.length - 1 ||
                      (i === s.length - 3 && this.handleGetNextOptions(),
                      (i += 1)),
                      this.setState({ hoverIndex: i });
                  else if (13 === l) {
                    var c = (s[i] || {}).id;
                    n && !(0, b.getIsEmptyValue)(c) && a && a(c, o[c]),
                      n
                        ? !(0, b.getIsEmptyValue)(c) && this.togglePopup(e)
                        : this.togglePopup(e);
                  }
                }
              },
              {
                key: 'handleSearchOptions',
                value: function() {
                  var e = this.props.onSearch,
                    t = this.state.searchStr;
                  t && this.handleFetchOptions(e, t);
                }
              },
              {
                key: 'handleSearch',
                value: function(e) {
                  var t = this,
                    a = this.state.searchStr,
                    n = void 0 === a ? '' : a,
                    r = this.props.onSearch,
                    i =
                      n.toLowerCase().replace(/\s+/g, '') !==
                      e.toLowerCase().replace(/\s+/g, '');
                  this.setState({ searchStr: e, hoverIndex: 0 }, function() {
                    e
                      ? i && r && t.handleSearchOptions()
                      : r && t.handleFetchOptions(r, '');
                  });
                }
              },
              {
                key: 'handleMouseEnter',
                value: function(e) {
                  var t = this.state.hoverIndex,
                    a = this.optionsOrder.indexOf(e);
                  t !== a && this.setState({ hoverIndex: a });
                }
              },
              {
                key: 'handleFilterSuggestions',
                value: function() {
                  var e = this.props,
                    t = e.needLocalSearch,
                    a = e.excludeOptions,
                    n = void 0 === a ? _ : a,
                    r = e.needSearch,
                    i = this.state,
                    o = i.options,
                    s = void 0 === o ? _ : o,
                    l = i.searchStr;
                  return (r && l && l.trim().length) || (n && n.length)
                    ? this.getFilterSuggestions({
                        options: s,
                        selectedOptions: n,
                        searchStr: l,
                        needSearch: t
                      }).suggestions
                    : s;
                }
              },
              {
                key: 'handleScroll',
                value: function(e) {
                  e.target.scrollTop + e.target.offsetHeight >
                    e.target.scrollHeight - 1 && this.handleGetNextOptions();
                }
              },
              {
                key: 'handleFetchOptions',
                value: function(e) {
                  var t = this,
                    a =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : '',
                    n = this.state.isFetchingOptions,
                    r = void 0 !== n && n,
                    i = this._isMounted;
                  if (!r && e) {
                    this.setState({ isFetchingOptions: !0 });
                    try {
                      return e(a).then(
                        function() {
                          i && t.setState({ isFetchingOptions: !1 });
                        },
                        function() {
                          i && t.setState({ isFetchingOptions: !1 });
                        }
                      );
                    } catch (e) {
                      i && this.setState({ isFetchingOptions: !1 });
                    }
                  }
                }
              },
              {
                key: 'handleGetNextOptions',
                value: function() {
                  var e = this.props,
                    t = e.isNextOptions,
                    a = e.getNextOptions,
                    n = this.state.searchStr;
                  t && a && this.handleFetchOptions(a, n);
                }
              },
              {
                key: 'togglePopup',
                value: function(e) {
                  var t = this.props,
                    a = t.togglePopup,
                    n = t.isReadOnly,
                    r = t.defaultDropBoxPosition;
                  !n && a(e, r ? r + 'Center' : null);
                }
              },
              {
                key: 'handlePopupClose',
                value: function(e) {
                  (0, this.props.closePopupOnly)(e);
                }
              },
              {
                key: 'suggestionContainerRef',
                value: function(e) {
                  this.suggestionContainer = e;
                }
              },
              {
                key: 'suggestionItemRef',
                value: function(e, t, a) {
                  this['suggestion_' + a] = e;
                }
              },
              {
                key: 'searchInputRef',
                value: function(e) {
                  this.searchInput = e;
                }
              },
              {
                key: 'valueInputRef',
                value: function(e) {
                  var t = this.props.getRef;
                  (this.valueInput = e), t && t(e);
                }
              },
              {
                key: 'handleSelectFocus',
                value: function(e) {
                  var t = (e || {}).target;
                  t && t.setSelectionRange(t, 0);
                }
              },
              {
                key: 'handleClearSearch',
                value: function() {
                  var e = this;
                  this.handleSearch(''),
                    setTimeout(function() {
                      e.searchInput && e.searchInput.focus();
                    }, 1);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.needSearch,
                    a = e.dropBoxSize,
                    n = e.emptyMessage,
                    r = e.searchEmptyMessage,
                    o = e.needBorder,
                    s = e.needSelectDownIcon,
                    v = e.position,
                    b = e.defaultDropBoxPosition,
                    y = e.getTargetRef,
                    _ = e.getContainerRef,
                    C = e.isPopupOpen,
                    A = e.removeClose,
                    S = e.isPopupReady,
                    k = e.animationStyle,
                    I = e.textBoxSize,
                    E = e.textBoxVariant,
                    T = e.searchBoxSize,
                    O = e.searchBoxPlaceHolder,
                    x = e.maxLength,
                    N = e.isDisabled,
                    L = e.title,
                    P = e.size,
                    M = e.placeHolder,
                    w = e.className,
                    j = e.portalId,
                    D = e.isReadOnly,
                    R = e.dataId,
                    F = this.state,
                    B = F.hoverIndex,
                    V = F.selected,
                    U = F.searchStr,
                    z = F.isFetchingOptions,
                    G = F.selectedId,
                    H = F.options,
                    K = this.handleFilterSuggestions();
                  return i.default.createElement(
                    'div',
                    {
                      className:
                        h.default.container + ' ' + h.default['box_' + P] + ' ',
                      'data-title': N ? L : ''
                    },
                    i.default.createElement(
                      'div',
                      {
                        className: '' + (w || ''),
                        onClick: N || D ? null : this.togglePopup,
                        ref: y
                      },
                      s
                        ? i.default.createElement(
                            c.default,
                            {
                              isDisabled: N,
                              iconRotated: C,
                              inputRef: this.valueInputRef,
                              maxLength: x,
                              needBorder: o,
                              onFocus: this.handleSelectFocus,
                              onKeyDown: this.handleKeyDown,
                              placeHolder: M,
                              isReadOnly: !0,
                              size: I,
                              value: V,
                              variant: E,
                              needReadOnlyStyle: !!D,
                              dataId: R,
                              isClickable: !D && !N,
                              className: D || N ? '' : h.default.input,
                              needEffect: !D
                            },
                            i.default.createElement(
                              'div',
                              {
                                className: h.default.arrowIcon,
                                'data-id': R + '_downIcon'
                              },
                              i.default.createElement(g.default, {
                                name: 'blockDownArrow',
                                size: '8'
                              })
                            )
                          )
                        : i.default.createElement(u.default, {
                            disabled: N,
                            inputRef: this.valueInputRef,
                            maxLength: x,
                            needBorder: o,
                            onFocus: this.handleSelectFocus,
                            onKeyDown: this.handleKeyDown,
                            placeHolder: M,
                            readOnly: !0,
                            size: I,
                            value: V,
                            variant: E,
                            needReadOnlyStyle: !!D,
                            dataId: R,
                            isClickable: !D && !N
                          })
                    ),
                    D || N || !C
                      ? null
                      : i.default.createElement(
                          l.default,
                          {
                            animationStyle: k,
                            boxPosition: v || b + 'Center',
                            getRef: _,
                            isActive: S,
                            isAnimate: !0,
                            isArrow: !1,
                            onClick: A,
                            portalId: j,
                            dataIdContainer: R + '_suggestions'
                          },
                          i.default.createElement(
                            m.default,
                            {
                              className: h.default.box,
                              onScroll: this.handleScroll
                            },
                            t
                              ? i.default.createElement(
                                  d.CardHeader,
                                  null,
                                  i.default.createElement(
                                    'div',
                                    {
                                      className:
                                        h.default.search + ' ' + h.default[P]
                                    },
                                    i.default.createElement(c.default, {
                                      inputRef: this.searchInputRef,
                                      maxLength: x,
                                      onChange: this.handleSearch,
                                      onKeyDown: this.handleKeyDown,
                                      placeHolder: O,
                                      size: T,
                                      value: U,
                                      onClear: this.handleClearSearch,
                                      dataIdSearchBox: R + '_searchBox'
                                    })
                                  )
                                )
                              : null,
                            i.default.createElement(
                              d.CardContent,
                              {
                                className: a ? h.default[a] : '',
                                eleRef: this.suggestionContainerRef,
                                dataId: R + '_Options'
                              },
                              K.length
                                ? i.default.createElement(p.default, {
                                    activeId: G,
                                    suggestions: K,
                                    getRef: this.suggestionItemRef,
                                    hoverOption: B,
                                    onClick: this.handleChange,
                                    onMouseEnter: this.handleMouseEnter
                                  })
                                : i.default.createElement(f.default, {
                                    emptyMessage: n,
                                    isLoading: z,
                                    options: H,
                                    searchEmptyMessage: r,
                                    searchString: U,
                                    suggestions: K,
                                    dataIdLoading: R + '_loading',
                                    dataIdSrchEmptyMsg: R + '_srchEmptyMsg',
                                    dataIdNoOptnsMsg: R + '_noOptnsMsg'
                                  })
                            )
                          )
                        )
                  );
                }
              }
            ]),
            t
          );
        })());
      (C.propTypes = {
        animationStyle: o.default.string,
        className: o.default.string,
        closePopupOnly: o.default.func,
        dataId: o.default.string,
        defaultDropBoxPosition: o.default.oneOf([
          'bottom',
          'top',
          'left',
          'right'
        ]),
        dropBoxSize: o.default.oneOf(['small', 'medium', 'large']),
        emptyMessage: o.default.string,
        excludeOptions: o.default.array,
        getContainerRef: o.default.func,
        getNextOptions: o.default.func,
        getRef: o.default.func,
        getTargetRef: o.default.func,
        isDefaultSelectValue: o.default.bool,
        isDisabled: o.default.bool,
        isNextOptions: o.default.bool,
        isPopupOpen: o.default.bool,
        isPopupReady: o.default.bool,
        isReadOnly: o.default.bool,
        maxLength: o.default.string,
        needBorder: o.default.bool,
        needLocalSearch: o.default.bool,
        needSearch: o.default.bool,
        needSelectDownIcon: o.default.bool,
        onChange: o.default.func.isRequired,
        onDropBoxClose: o.default.func,
        onDropBoxOpen: o.default.func,
        onSearch: o.default.func,
        options: o.default.oneOfType([
          o.default.arrayOf(
            o.default.oneOfType([o.default.string, o.default.number])
          ),
          o.default.arrayOf(
            o.default.shape({
              id: o.default.oneOfType([o.default.string, o.default.number]),
              text: o.default.oneOfType([o.default.string, o.default.number])
            })
          )
        ]).isRequired,
        placeHolder: o.default.string,
        portalId: o.default.string,
        position: o.default.string,
        removeClose: o.default.func,
        searchBoxPlaceHolder: o.default.string,
        searchBoxSize: o.default.string,
        searchDebounceTime: o.default.number,
        searchEmptyMessage: o.default.string,
        selectedValue: o.default.oneOfType([
          o.default.oneOfType([o.default.string, o.default.number]),
          o.default.shape({
            id: o.default.oneOfType([o.default.string, o.default.number]),
            text: o.default.oneOfType([o.default.string, o.default.number])
          })
        ]),
        size: o.default.oneOf(['small', 'medium']),
        textBoxSize: o.default.string,
        textBoxVariant: o.default.string,
        textField: o.default.string,
        title: o.default.string,
        togglePopup: o.default.func,
        valueField: o.default.string
      }),
        (C.propTypesDescription = {
          size: ' ',
          title: ' ',
          isDisabled: ' ',
          maxLength: ' ',
          searchBoxSize: ' ',
          searchBoxPlaceHolder: ' ',
          textBoxSize: ' ',
          textBoxVariant: ' ',
          options: ' ',
          selectedValue: ' ',
          onChange: ' ',
          emptyMessage: ' ',
          needSearch: ' ',
          valueField: ' ',
          textField: ' '
        }),
        (C.defaultProps = {
          animationStyle: 'bounce',
          defaultDropBoxPosition: 'bottom',
          dropBoxSize: 'small',
          isDefaultSelectValue: !0,
          isDisabled: !1,
          isReadOnly: !1,
          needBorder: !0,
          needLocalSearch: !0,
          needSearch: !1,
          needSelectDownIcon: !0,
          placeHolder: '',
          searchBoxPlaceHolder: 'Search',
          searchBoxSize: 'medium',
          size: 'medium',
          dataId: 'selectComponent',
          textBoxSize: 'medium',
          textBoxVariant: 'default',
          textField: 'text',
          valueField: 'id'
        }),
        (C.displayName = 'Select');
      var A = (0, s.default)(C);
      (A.propTypes = C.propTypes),
        (A.defaultProps = C.defaultProps),
        (t.default = A);
    },
    950: function(e, t, a) {
      'use strict';
      var n = a(12),
        r = a.n(n),
        i = a(9),
        o = a.n(i),
        s = a(10),
        l = a.n(s),
        c = a(13),
        u = a.n(c),
        d = a(14),
        m = a.n(d),
        p = a(0),
        f = a.n(p),
        h = a(1),
        g = a.n(h),
        v = a(965),
        b = a.n(v),
        y = a(30),
        _ = a(16),
        C = a(947),
        A = a.n(C),
        S = (function(e) {
          function t() {
            return (
              o()(this, t),
              u()(this, (t.__proto__ || r()(t)).apply(this, arguments))
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.icon,
                    a = e.iconSize,
                    n = e.text,
                    r = e.count,
                    i = e.onClick,
                    o = e.isAllSelected,
                    s = e.needCheckBox,
                    l = e.label,
                    c = e.dataId,
                    u = e.type,
                    d = l || n;
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    f.a.createElement(
                      _.ResponsiveBox,
                      {
                        isHiddenSizes: ['sm', 'md', 'lg', 'xl'],
                        className:
                          ('ticketLp' == u ? b.a.ticketLp : '') +
                          ' ' +
                          b.a.item,
                        onClick: i,
                        shrink: !0
                      },
                      f.a.createElement(
                        _.Container,
                        { alignBox: 'row', align: 'vertical' },
                        s
                          ? f.a.createElement(
                              _.Box,
                              { className: b.a.check },
                              f.a.createElement(A.a, { checked: o })
                            )
                          : t
                            ? f.a.createElement(
                                _.Box,
                                {
                                  className:
                                    b.a.massIcon +
                                    ' ' +
                                    ('ticketLp' !== u ? b.a.Hiddenicon : '')
                                },
                                'spam' == t || 'geometry' == t
                                  ? f.a.createElement(y.CommonFontIcon, {
                                      name: t,
                                      size: a,
                                      iconClass:
                                        'ticketLp' == u ? b.a.ticketLpicon : ''
                                    })
                                  : f.a.createElement(y.TopbandFontIcon, {
                                      name: t,
                                      size: a,
                                      hoverColor:
                                        'delete2' == t ? 'danger' : '',
                                      iconClass:
                                        'ticketLp' == u ? b.a.ticketLpicon : ''
                                    })
                              )
                            : null,
                        r
                          ? f.a.createElement(
                              _.Box,
                              {
                                className: b.a.massCount + ' ',
                                'data-id': c + 'Count'
                              },
                              '(',
                              f.a.createElement(
                                'span',
                                { className: '' + (s ? b.a.danger : '') },
                                r
                              ),
                              ')'
                            )
                          : null
                      )
                    ),
                    f.a.createElement(
                      _.ResponsiveBox,
                      {
                        shrink: !0,
                        isHiddenSizes: ['xs'],
                        className:
                          ('ticketLp' == u ? b.a.ticketLp : '') +
                          ' ' +
                          b.a.item,
                        onClick: i
                      },
                      f.a.createElement(
                        _.Container,
                        {
                          alignBox: 'row',
                          className: s ? b.a.checkMassItem : b.a.massItem,
                          'data-title': d,
                          dataId: c,
                          align: 'vertical'
                        },
                        'secondary' == u
                          ? f.a.createElement(
                              f.a.Fragment,
                              null,
                              n
                                ? f.a.createElement(
                                    _.Box,
                                    {
                                      className: b.a.massLabel,
                                      dataId: (c || '') + 'Label'
                                    },
                                    n
                                  )
                                : null,
                              r
                                ? f.a.createElement(
                                    _.Box,
                                    {
                                      className:
                                        b.a.massCount +
                                        ' ' +
                                        (s ? b.a.danger : b.a.dark) +
                                        ' ',
                                      dataId: (c || '') + 'Count'
                                    },
                                    r
                                  )
                                : null
                            )
                          : f.a.createElement(
                              f.a.Fragment,
                              null,
                              s
                                ? f.a.createElement(
                                    _.Box,
                                    { className: b.a.check },
                                    f.a.createElement(A.a, { checked: o })
                                  )
                                : t
                                  ? f.a.createElement(
                                      _.Box,
                                      { className: b.a.massIcon + ' ' },
                                      'spam' == t || 'geometry' == t
                                        ? f.a.createElement(y.CommonFontIcon, {
                                            name: t,
                                            size: a,
                                            iconClass:
                                              'ticketLp' == u
                                                ? b.a.ticketLpicon
                                                : ''
                                          })
                                        : f.a.createElement(y.TopbandFontIcon, {
                                            name: t,
                                            size: a,
                                            hoverColor:
                                              'delete2' == t ? 'danger' : '',
                                            iconClass:
                                              'ticketLp' == u
                                                ? b.a.ticketLpicon
                                                : ''
                                          })
                                    )
                                  : null,
                              n
                                ? f.a.createElement(
                                    _.Box,
                                    {
                                      shrink: !0,
                                      adjust: !0,
                                      className: b.a.massLabel,
                                      dataId: (c || '') + 'Label'
                                    },
                                    n
                                  )
                                : null,
                              r
                                ? f.a.createElement(
                                    _.Box,
                                    {
                                      className:
                                        b.a.massCount +
                                        ' ' +
                                        (s ? b.a.danger : b.a.dark) +
                                        ' ',
                                      dataId: (c || '') + 'Count'
                                    },
                                    r
                                  )
                                : null
                            )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(f.a.Component);
      (t.a = S),
        (S.propTypes = {
          count: g.a.number,
          dataId: g.a.string,
          icon: g.a.string,
          iconSize: g.a.string,
          isAllSelected: g.a.bool,
          label: g.a.string,
          needCheckBox: g.a.bool,
          onClick: g.a.func,
          text: g.a.string,
          type: g.a.oneOf(['primary', 'secondary', 'ticketLp'])
        });
    },
    953: function(e, t, a) {
      e.exports = {
        container: 'CheckBox-module__container common-module__offSelection',
        layout:
          'CheckBox-module__layout common-module__dflex common-module__flexrow common-module__alignVertical',
        basic: 'CheckBox-module__basic',
        input: 'CheckBox-module__input',
        label: 'CheckBox-module__label',
        disabled: 'CheckBox-module__disabled common-module__disabled',
        pointer: 'CheckBox-module__pointer',
        layoutshrink: 'CheckBox-module__layoutshrink common-module__flexshrink',
        text: 'CheckBox-module__text common-module__flexgrow',
        checked: 'CheckBox-module__checked',
        tick: 'CheckBox-module__tick',
        label_primary: 'CheckBox-module__label_primary CheckBox-module__label',
        label_danger: 'CheckBox-module__label_danger CheckBox-module__label',
        primary_active: 'CheckBox-module__primary_active',
        danger_active: 'CheckBox-module__danger_active'
      };
    },
    954: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.offsetMap = {
        'Africa/Abidjan': 0,
        'Africa/Accra': 0,
        'Africa/Addis_Ababa': 180,
        'Africa/Algiers': 0,
        'Africa/Asmara': 180,
        'Africa/Asmera': 180,
        'Africa/Bamako': 0,
        'Africa/Bangui': 60,
        'Africa/Banjul': 0,
        'Africa/Bissau': -60,
        'Africa/Blantyre': 120,
        'Africa/Brazzaville': 60,
        'Africa/Bujumbura': 120,
        'Africa/Cairo': 120,
        'Africa/Casablanca': 0,
        'Africa/Ceuta': 0,
        'Africa/Conakry': 0,
        'Africa/Dakar': 0,
        'Africa/Dar_es_Salaam': 180,
        'Africa/Djibouti': 180,
        'Africa/Douala': 60,
        'Africa/El_Aaiun': -60,
        'Africa/Freetown': 0,
        'Africa/Gaborone': 120,
        'Africa/Harare': 120,
        'Africa/Johannesburg': 120,
        'Africa/Juba': 120,
        'Africa/Kampala': 180,
        'Africa/Khartoum': 120,
        'Africa/Kigali': 120,
        'Africa/Kinshasa': 60,
        'Africa/Lagos': 60,
        'Africa/Libreville': 60,
        'Africa/Lome': 0,
        'Africa/Luanda': 60,
        'Africa/Lubumbashi': 120,
        'Africa/Lusaka': 120,
        'Africa/Malabo': 60,
        'Africa/Maputo': 120,
        'Africa/Maseru': 120,
        'Africa/Mbabane': 120,
        'Africa/Mogadishu': 180,
        'Africa/Monrovia': 44,
        'Africa/Nairobi': 180,
        'Africa/Ndjamena': 60,
        'Africa/Niamey': 60,
        'Africa/Nouakchott': 0,
        'Africa/Ouagadougou': 0,
        'Africa/Porto-Novo': 60,
        'Africa/Sao_Tome': 0,
        'Africa/Timbuktu': 0,
        'Africa/Tripoli': 120,
        'Africa/Tunis': 60,
        'Africa/Windhoek': 120,
        'America/Adak': -660,
        'America/Anchorage': -600,
        'America/Anguilla': -240,
        'America/Antigua': -240,
        'America/Araguaina': -180,
        'America/Argentina/Buenos_Aires': -180,
        'America/Argentina/Catamarca': -180,
        'America/Argentina/ComodRivadavia': -180,
        'America/Argentina/Cordoba': -180,
        'America/Argentina/Jujuy': -180,
        'America/Argentina/La_Rioja': -180,
        'America/Argentina/Mendoza': -180,
        'America/Argentina/Rio_Gallegos': -180,
        'America/Argentina/Salta': -180,
        'America/Argentina/San_Juan': -180,
        'America/Argentina/San_Luis': -180,
        'America/Argentina/Tucuman': -180,
        'America/Argentina/Ushuaia': -180,
        'America/Aruba': -240,
        'America/Asuncion': -240,
        'America/Atikokan': -300,
        'America/Atka': -660,
        'America/Bahia': -180,
        'America/Bahia_Banderas': -480,
        'America/Barbados': -240,
        'America/Belem': -180,
        'America/Belize': -360,
        'America/Blanc-Sablon': -240,
        'America/Boa_Vista': -240,
        'America/Bogota': -300,
        'America/Boise': -420,
        'America/Buenos_Aires': -180,
        'America/Cambridge_Bay': -420,
        'America/Campo_Grande': -240,
        'America/Cancun': -360,
        'America/Caracas': -240,
        'America/Catamarca': -180,
        'America/Cayenne': -180,
        'America/Cayman': -300,
        'America/Chicago': -360,
        'America/Chihuahua': -360,
        'America/Coral_Harbour': -300,
        'America/Cordoba': -180,
        'America/Costa_Rica': -360,
        'America/Creston': -420,
        'America/Cuiaba': -240,
        'America/Curacao': -240,
        'America/Danmarkshavn': -180,
        'America/Dawson': -540,
        'America/Dawson_Creek': -480,
        'America/Denver': -420,
        'America/Detroit': -300,
        'America/Dominica': -240,
        'America/Edmonton': -420,
        'America/Eirunepe': -300,
        'America/El_Salvador': -360,
        'America/Ensenada': -480,
        'America/Fort_Nelson': -420,
        'America/Fort_Wayne': -300,
        'America/Fortaleza': -180,
        'America/Glace_Bay': -240,
        'America/Godthab': -180,
        'America/Goose_Bay': -240,
        'America/Grand_Turk': -300,
        'America/Grenada': -240,
        'America/Guadeloupe': -240,
        'America/Guatemala': -360,
        'America/Guayaquil': -300,
        'America/Guyana': -135,
        'America/Halifax': -240,
        'America/Havana': -300,
        'America/Hermosillo': -480,
        'America/Indiana/Indianapolis': -300,
        'America/Indiana/Knox': -360,
        'America/Indiana/Marengo': -300,
        'America/Indiana/Petersburg': -360,
        'America/Indiana/Tell_City': -300,
        'America/Indiana/Vevay': -300,
        'America/Indiana/Vincennes': -300,
        'America/Indiana/Winamac': -300,
        'America/Indianapolis': -300,
        'America/Inuvik': -480,
        'America/Iqaluit': -300,
        'America/Jamaica': -300,
        'America/Jujuy': -180,
        'America/Juneau': -480,
        'America/Kentucky/Louisville': -300,
        'America/Kentucky/Monticello': -360,
        'America/Knox_IN': -360,
        'America/Kralendijk': -240,
        'America/La_Paz': -240,
        'America/Lima': -300,
        'America/Los_Angeles': -480,
        'America/Louisville': -300,
        'America/Lower_Princes': -240,
        'America/Maceio': -180,
        'America/Managua': -360,
        'America/Manaus': -240,
        'America/Marigot': -240,
        'America/Martinique': -240,
        'America/Matamoros': -360,
        'America/Mazatlan': -480,
        'America/Mendoza': -180,
        'America/Menominee': -300,
        'America/Merida': -360,
        'America/Metlakatla': -480,
        'America/Mexico_City': -360,
        'America/Miquelon': -240,
        'America/Moncton': -240,
        'America/Monterrey': -360,
        'America/Montevideo': -180,
        'America/Montreal': -300,
        'America/Montserrat': -240,
        'America/Nassau': -300,
        'America/New_York': -300,
        'America/Nipigon': -300,
        'America/Nome': -660,
        'America/Noronha': -120,
        'America/North_Dakota/Beulah': -420,
        'America/North_Dakota/Center': -420,
        'America/North_Dakota/New_Salem': -420,
        'America/Ojinaga': -360,
        'America/Panama': -300,
        'America/Pangnirtung': -240,
        'America/Paramaribo': -150,
        'America/Phoenix': -420,
        'America/Port-au-Prince': -300,
        'America/Port_of_Spain': -240,
        'America/Porto_Acre': -300,
        'America/Porto_Velho': -240,
        'America/Puerto_Rico': -240,
        'America/Punta_Arenas': -180,
        'America/Rainy_River': -360,
        'America/Rankin_Inlet': -360,
        'America/Recife': -180,
        'America/Regina': -360,
        'America/Resolute': -360,
        'America/Rio_Branco': -300,
        'America/Rosario': -180,
        'America/Santa_Isabel': -480,
        'America/Santarem': -240,
        'America/Santiago': -180,
        'America/Santo_Domingo': -210,
        'America/Sao_Paulo': -180,
        'America/Scoresbysund': -120,
        'America/Shiprock': -420,
        'America/Sitka': -480,
        'America/St_Barthelemy': -240,
        'America/St_Johns': -150,
        'America/St_Kitts': -240,
        'America/St_Lucia': -240,
        'America/St_Thomas': -240,
        'America/St_Vincent': -240,
        'America/Swift_Current': -420,
        'America/Tegucigalpa': -360,
        'America/Thule': -240,
        'America/Thunder_Bay': -300,
        'America/Tijuana': -480,
        'America/Toronto': -300,
        'America/Tortola': -240,
        'America/Vancouver': -480,
        'America/Virgin': -240,
        'America/Whitehorse': -480,
        'America/Winnipeg': -360,
        'America/Yakutat': -540,
        'America/Yellowknife': -420,
        'Antarctica/Casey': 480,
        'Antarctica/Davis': 420,
        'Antarctica/DumontDUrville': 600,
        'Antarctica/Macquarie': 660,
        'Antarctica/Mawson': 360,
        'Antarctica/McMurdo': 720,
        'Antarctica/Palmer': -180,
        'Antarctica/Rothera': 0,
        'Antarctica/South_Pole': 720,
        'Antarctica/Syowa': 180,
        'Antarctica/Troll': 0,
        'Antarctica/Vostok': 360,
        'Arctic/Longyearbyen': 60,
        'Asia/Aden': 180,
        'Asia/Almaty': 360,
        'Asia/Amman': 120,
        'Asia/Anadyr': 780,
        'Asia/Aqtau': 300,
        'Asia/Aqtobe': 300,
        'Asia/Ashgabat': 300,
        'Asia/Ashkhabad': 300,
        'Asia/Atyrau': 300,
        'Asia/Baghdad': 180,
        'Asia/Bahrain': 240,
        'Asia/Baku': 240,
        'Asia/Bangkok': 420,
        'Asia/Barnaul': 420,
        'Asia/Beirut': 120,
        'Asia/Bishkek': 360,
        'Asia/Brunei': 480,
        'Asia/Calcutta': 330,
        'Asia/Chita': 540,
        'Asia/Choibalsan': 420,
        'Asia/Chongqing': 420,
        'Asia/Chungking': 420,
        'Asia/Colombo': 330,
        'Asia/Dacca': 360,
        'Asia/Damascus': 120,
        'Asia/Dhaka': 360,
        'Asia/Dili': 540,
        'Asia/Dubai': 240,
        'Asia/Dushanbe': 360,
        'Asia/Famagusta': 120,
        'Asia/Gaza': 120,
        'Asia/Harbin': 510,
        'Asia/Hebron': 120,
        'Asia/Ho_Chi_Minh': 420,
        'Asia/Hong_Kong': 480,
        'Asia/Hovd': 360,
        'Asia/Irkutsk': 480,
        'Asia/Istanbul': 120,
        'Asia/Jakarta': 420,
        'Asia/Jayapura': 540,
        'Asia/Jerusalem': 120,
        'Asia/Kabul': 270,
        'Asia/Kamchatka': 720,
        'Asia/Karachi': 300,
        'Asia/Kashgar': 300,
        'Asia/Kathmandu': 330,
        'Asia/Katmandu': 330,
        'Asia/Khandyga': 540,
        'Asia/Kolkata': 330,
        'Asia/Krasnoyarsk': 420,
        'Asia/Kuala_Lumpur': 450,
        'Asia/Kuching': 480,
        'Asia/Kuwait': 180,
        'Asia/Macao': 480,
        'Asia/Macau': 480,
        'Asia/Magadan': 660,
        'Asia/Makassar': 480,
        'Asia/Manila': 480,
        'Asia/Muscat': 240,
        'Asia/Nicosia': 120,
        'Asia/Novokuznetsk': 420,
        'Asia/Novosibirsk': 420,
        'Asia/Omsk': 360,
        'Asia/Oral': 300,
        'Asia/Phnom_Penh': 420,
        'Asia/Pontianak': 480,
        'Asia/Pyongyang': 540,
        'Asia/Qatar': 240,
        'Asia/Qyzylorda': 300,
        'Asia/Rangoon': 390,
        'Asia/Riyadh': 180,
        'Asia/Saigon': 420,
        'Asia/Sakhalin': 660,
        'Asia/Samarkand': 300,
        'Asia/Seoul': 540,
        'Asia/Shanghai': 480,
        'Asia/Singapore': 450,
        'Asia/Srednekolymsk': 660,
        'Asia/Taipei': 480,
        'Asia/Tashkent': 360,
        'Asia/Tbilisi': 240,
        'Asia/Tehran': 210,
        'Asia/Tel_Aviv': 120,
        'Asia/Thimbu': 330,
        'Asia/Thimphu': 330,
        'Asia/Tokyo': 540,
        'Asia/Tomsk': 420,
        'Asia/Ujung_Pandang': 480,
        'Asia/Ulaanbaatar': 420,
        'Asia/Ulan_Bator': 420,
        'Asia/Urumqi': 360,
        'Asia/Ust-Nera': 600,
        'Asia/Vientiane': 420,
        'Asia/Vladivostok': 600,
        'Asia/Yakutsk': 540,
        'Asia/Yangon': 390,
        'Asia/Yekaterinburg': 300,
        'Asia/Yerevan': 240,
        'Atlantic/Azores': -60,
        'Atlantic/Bermuda': -240,
        'Atlantic/Canary': 0,
        'Atlantic/Cape_Verde': -120,
        'Atlantic/Faeroe': 0,
        'Atlantic/Faroe': 0,
        'Atlantic/Jan_Mayen': 60,
        'Atlantic/Madeira': 0,
        'Atlantic/Reykjavik': 0,
        'Atlantic/South_Georgia': -120,
        'Atlantic/St_Helena': 0,
        'Atlantic/Stanley': -240,
        'Australia/ACT': 600,
        'Australia/Adelaide': 570,
        'Australia/Brisbane': 600,
        'Australia/Broken_Hill': 570,
        'Australia/Canberra': 600,
        'Australia/Currie': 600,
        'Australia/Darwin': 570,
        'Australia/Eucla': 525,
        'Australia/Hobart': 660,
        'Australia/LHI': 600,
        'Australia/Lindeman': 600,
        'Australia/Lord_Howe': 600,
        'Australia/Melbourne': 600,
        'Australia/NSW': 600,
        'Australia/North': 570,
        'Australia/Perth': 480,
        'Australia/Queensland': 600,
        'Australia/South': 570,
        'Australia/Sydney': 600,
        'Australia/Tasmania': 660,
        'Australia/Victoria': 600,
        'Australia/West': 480,
        'Australia/Yancowinna': 570,
        'Brazil/Acre': -300,
        'Brazil/DeNoronha': -120,
        'Brazil/East': -180,
        'Brazil/West': -240,
        CET: 60,
        CST6CDT: -360,
        'Canada/Atlantic': -240,
        'Canada/Central': -360,
        'Canada/Eastern': -300,
        'Canada/Mountain': -420,
        'Canada/Newfoundland': -150,
        'Canada/Pacific': -480,
        'Canada/Saskatchewan': -360,
        'Canada/Yukon': -480,
        'Chile/Continental': -180,
        'Chile/EasterIsland': -360,
        Cuba: -300,
        EET: 120,
        EST5EDT: -300,
        Egypt: 120,
        Eire: 60,
        'Etc/GMT': 0,
        'Etc/GMT+0': 0,
        'Etc/GMT+1': -60,
        'Etc/GMT+10': -600,
        'Etc/GMT+11': -660,
        'Etc/GMT+12': -720,
        'Etc/GMT+2': -120,
        'Etc/GMT+3': -180,
        'Etc/GMT+4': -240,
        'Etc/GMT+5': -300,
        'Etc/GMT+6': -360,
        'Etc/GMT+7': -420,
        'Etc/GMT+8': -480,
        'Etc/GMT+9': -540,
        'Etc/GMT-0': 0,
        'Etc/GMT-1': 60,
        'Etc/GMT-10': 600,
        'Etc/GMT-11': 660,
        'Etc/GMT-12': 720,
        'Etc/GMT-13': 780,
        'Etc/GMT-14': 840,
        'Etc/GMT-2': 120,
        'Etc/GMT-3': 180,
        'Etc/GMT-4': 240,
        'Etc/GMT-5': 300,
        'Etc/GMT-6': 360,
        'Etc/GMT-7': 420,
        'Etc/GMT-8': 480,
        'Etc/GMT-9': 540,
        'Etc/GMT0': 0,
        'Etc/Greenwich': 0,
        'Etc/UCT': 0,
        'Etc/UTC': 0,
        'Etc/Universal': 0,
        'Etc/Zulu': 0,
        'Europe/Amsterdam': 60,
        'Europe/Andorra': 60,
        'Europe/Astrakhan': 240,
        'Europe/Athens': 120,
        'Europe/Belfast': 60,
        'Europe/Belgrade': 60,
        'Europe/Berlin': 60,
        'Europe/Bratislava': 60,
        'Europe/Brussels': 60,
        'Europe/Bucharest': 120,
        'Europe/Budapest': 60,
        'Europe/Busingen': 60,
        'Europe/Chisinau': 180,
        'Europe/Copenhagen': 60,
        'Europe/Dublin': 60,
        'Europe/Gibraltar': 60,
        'Europe/Guernsey': 60,
        'Europe/Helsinki': 120,
        'Europe/Isle_of_Man': 60,
        'Europe/Istanbul': 120,
        'Europe/Jersey': 60,
        'Europe/Kaliningrad': 180,
        'Europe/Kiev': 180,
        'Europe/Kirov': 180,
        'Europe/Lisbon': 60,
        'Europe/Ljubljana': 60,
        'Europe/London': 60,
        'Europe/Luxembourg': 60,
        'Europe/Madrid': 60,
        'Europe/Malta': 60,
        'Europe/Mariehamn': 120,
        'Europe/Minsk': 180,
        'Europe/Monaco': 60,
        'Europe/Moscow': 180,
        'Europe/Nicosia': 120,
        'Europe/Oslo': 60,
        'Europe/Paris': 60,
        'Europe/Podgorica': 60,
        'Europe/Prague': 60,
        'Europe/Riga': 180,
        'Europe/Rome': 60,
        'Europe/Samara': 240,
        'Europe/San_Marino': 60,
        'Europe/Sarajevo': 60,
        'Europe/Saratov': 240,
        'Europe/Simferopol': 180,
        'Europe/Skopje': 60,
        'Europe/Sofia': 120,
        'Europe/Stockholm': 60,
        'Europe/Tallinn': 180,
        'Europe/Tirane': 60,
        'Europe/Tiraspol': 180,
        'Europe/Ulyanovsk': 240,
        'Europe/Uzhgorod': 180,
        'Europe/Vaduz': 60,
        'Europe/Vatican': 60,
        'Europe/Vienna': 60,
        'Europe/Vilnius': 180,
        'Europe/Volgograd': 240,
        'Europe/Warsaw': 60,
        'Europe/Zagreb': 60,
        'Europe/Zaporozhye': 180,
        'Europe/Zurich': 60,
        GB: 60,
        'GB-Eire': 60,
        GMT: 0,
        GMT0: 0,
        Greenwich: 0,
        Hongkong: 480,
        Iceland: 0,
        'Indian/Antananarivo': 180,
        'Indian/Chagos': 300,
        'Indian/Christmas': 420,
        'Indian/Cocos': 390,
        'Indian/Comoro': 180,
        'Indian/Kerguelen': 300,
        'Indian/Mahe': 240,
        'Indian/Maldives': 300,
        'Indian/Mauritius': 240,
        'Indian/Mayotte': 180,
        'Indian/Reunion': 240,
        Iran: 210,
        Israel: 120,
        Jamaica: -300,
        Japan: 540,
        Kwajalein: -720,
        Libya: 120,
        MET: 60,
        MST7MDT: -420,
        'Mexico/BajaNorte': -480,
        'Mexico/BajaSur': -480,
        'Mexico/General': -360,
        NZ: 720,
        'NZ-CHAT': 765,
        Navajo: -420,
        PRC: 480,
        PST8PDT: -480,
        'Pacific/Apia': -660,
        'Pacific/Auckland': 720,
        'Pacific/Bougainville': 660,
        'Pacific/Chatham': 765,
        'Pacific/Chuuk': 600,
        'Pacific/Easter': -360,
        'Pacific/Efate': 660,
        'Pacific/Enderbury': -720,
        'Pacific/Fakaofo': -600,
        'Pacific/Fiji': 720,
        'Pacific/Funafuti': 720,
        'Pacific/Galapagos': -300,
        'Pacific/Gambier': -540,
        'Pacific/Guadalcanal': 660,
        'Pacific/Guam': 600,
        'Pacific/Honolulu': -600,
        'Pacific/Johnston': -600,
        'Pacific/Kiritimati': -560,
        'Pacific/Kosrae': 720,
        'Pacific/Kwajalein': -720,
        'Pacific/Majuro': 720,
        'Pacific/Marquesas': -510,
        'Pacific/Midway': -660,
        'Pacific/Nauru': 690,
        'Pacific/Niue': -630,
        'Pacific/Norfolk': 690,
        'Pacific/Noumea': 660,
        'Pacific/Pago_Pago': -660,
        'Pacific/Palau': 540,
        'Pacific/Pitcairn': -450,
        'Pacific/Pohnpei': 660,
        'Pacific/Ponape': 660,
        'Pacific/Port_Moresby': 600,
        'Pacific/Rarotonga': -570,
        'Pacific/Saipan': 600,
        'Pacific/Samoa': -660,
        'Pacific/Tahiti': -600,
        'Pacific/Tarawa': 720,
        'Pacific/Tongatapu': 780,
        'Pacific/Truk': 600,
        'Pacific/Wake': 720,
        'Pacific/Wallis': 720,
        'Pacific/Yap': 600,
        Poland: 60,
        Portugal: 60,
        ROK: 540,
        Singapore: 450,
        'SystemV/AST4': -240,
        'SystemV/AST4ADT': -240,
        'SystemV/CST6': -360,
        'SystemV/CST6CDT': -360,
        'SystemV/EST5': -300,
        'SystemV/EST5EDT': -300,
        'SystemV/HST10': -600,
        'SystemV/MST7': -420,
        'SystemV/MST7MDT': -420,
        'SystemV/PST8': -480,
        'SystemV/PST8PDT': -480,
        'SystemV/YST9': -540,
        'SystemV/YST9YDT': -540,
        Turkey: 120,
        UCT: 0,
        'US/Alaska': -600,
        'US/Aleutian': -660,
        'US/Arizona': -420,
        'US/Central': -360,
        'US/East-Indiana': -300,
        'US/Eastern': -300,
        'US/Hawaii': -600,
        'US/Indiana-Starke': -360,
        'US/Michigan': -300,
        'US/Mountain': -420,
        'US/Pacific': -480,
        'US/Pacific-New': -480,
        'US/Samoa': -660,
        UTC: 0,
        Universal: 0,
        'W-SU': 180,
        WET: 0,
        Zulu: 0,
        EST: -300,
        HST: -600,
        MST: -420,
        ACT: 570,
        AET: 600,
        AGT: -180,
        ART: 120,
        AST: -540,
        BET: -180,
        BST: 360,
        CAT: 120,
        CNT: -150,
        CST: -360,
        CTT: 480,
        EAT: 180,
        ECT: 60,
        IET: -300,
        IST: 330,
        JST: 540,
        MIT: 780,
        NET: 240,
        NST: 720,
        PLT: 300,
        PNT: -420,
        PRT: -240,
        PST: -480,
        SST: 660,
        VST: 420
      };
    },
    955: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getRestriction = t.getRestrictionObj = void 0);
      var n,
        r = a(964),
        i = a(19),
        o = (n = i) && n.__esModule ? n : { default: n };
      var s = (t.getRestrictionObj = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments[1],
          a = arguments[2],
          n = e.length,
          i = { isShow: !0, isReadOnly: !1 },
          s = r.restrictionRules[t];
        if (e.length)
          for (var l = 0; l < n; l++)
            if (void 0 !== s[e[l]][a]) {
              var c = s[e[l]][a];
              if (!c[0]) {
                (i.isReadOnly = null != c[1] && Boolean(c[1])),
                  (i.isShow = null != c[0] && Boolean(c[0]));
                break;
              }
              c[1] &&
                ((i.isReadOnly = null == c[1] || Boolean(c[1])),
                (i.isShow = null == c[0] || Boolean(c[0])),
                (i.readOnlyMessage = c[1]
                  ? (0, o.default)(
                      t + '[' + e[l] + '][' + a + ']',
                      r.lockMessages
                    )
                  : ''));
            }
        return i;
      });
      t.getRestriction = function(e, t, a) {
        return s(e, t, a);
      };
    },
    956: function(e, t, a) {
      'use strict';
      a.d(t, 'i', function() {
        return m;
      }),
        a.d(t, 'g', function() {
          return p;
        }),
        a.d(t, 'b', function() {
          return f;
        }),
        a.d(t, 'j', function() {
          return h;
        }),
        a.d(t, 'h', function() {
          return g;
        }),
        a.d(t, 'c', function() {
          return v;
        }),
        a.d(t, 'e', function() {
          return b;
        }),
        a.d(t, 'a', function() {
          return y;
        }),
        a.d(t, 'k', function() {
          return C;
        }),
        a.d(t, 'd', function() {
          return S;
        }),
        a.d(t, 'f', function() {
          return k;
        }),
        a.d(t, 'l', function() {
          return I;
        });
      a(20);
      var n = a(2),
        r = a.n(n),
        i = a(15),
        o = a(6),
        s = a(7),
        l = a(17),
        c = a(46),
        u = a(3),
        d = a(39);
      function m(e) {
        return {
          types: Object(o.m)('AGENTS_COUNT'),
          callAPI: function(t) {
            var a = Object(l.r)(t);
            return Object(i.a)(
              '/api/v1/agentsTicketsCount?' + Object(c.a)(t) + '&agentIds=' + e,
              !1,
              { orgId: t.currentOrgId }
            )
              .get()
              .then(function(e) {
                return 204 !== e.responseStatus
                  ? ((e.data = e.data.map(function(e) {
                      return r()({}, e, { id: e.agentId });
                    })),
                    { countData: e.data, deptId: a })
                  : {};
              });
          }
        };
      }
      function p(e, t, a) {
        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return {
          types: Object(o.m)(u.L.AGENT),
          callAPI: function(o) {
            return Object(i.a)(
              '/api/v1/agents?' +
                (e && 'allDepartment' !== e ? 'departmentId=' + e : '') +
                '&from=' +
                t +
                '&limit=' +
                a +
                '&status=ACTIVE&isConfirmed=' +
                n,
              !1,
              { orgId: o.currentOrgId }
            )
              .get()
              .then(function(t) {
                if (204 !== t.responseStatus) {
                  var n = t.data.length < a,
                    i = Object(s.normalize)(
                      t.data,
                      Object(s.arrayOf)(Object(s.schema)(u.L.AGENT_L))
                    );
                  return r()(i, { noMoreData: n, depId: e });
                }
                return { entities: { noMoreData: !0 }, result: [] };
              });
          }
        };
      }
      function f(e, t) {
        return {
          types: Object(o.m)(u.L.AGENT),
          callAPI: function(a) {
            return Object(i.a)('/api/v1/agents/' + e, !1, {
              orgId: a.currentOrgId
            })
              .get()
              .then(function(e) {
                var a = Object(s.normalize)(e, Object(s.schema)(u.L.AGENT_L));
                return r()(a, { depId: t });
              });
          }
        };
      }
      function h(e, t, a) {
        return {
          types: Object(o.m)('AGENT_SEARCH'),
          callAPI: function(n) {
            return Object(i.a)(
              '/api/v1/agents?searchStr=' + e + '&from=' + t + '&limit=' + a,
              !1,
              { orgId: n.currentOrgId }
            )
              .get()
              .then(function(e) {
                if (204 !== e.responseStatus) {
                  var n = e.data.length < a,
                    i = Object(s.normalize)(
                      e.data,
                      Object(s.arrayOf)(Object(s.schema)(u.L.AGENT_L))
                    );
                  return r()(i, { noMoreData: n });
                }
                return 1 === t
                  ? { entities: { noMoreData: !0, isEmpty: !0 }, result: [] }
                  : { entities: { noMoreData: !0 }, result: [] };
              });
          }
        };
      }
      function g() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
          t = arguments[1],
          a = arguments[2],
          n =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : u.u,
          d = arguments[4];
        return {
          types: Object(o.m)(u.L.AGENT),
          callAPI: function(o) {
            var m =
                {
                  activeAgents: 'status=ACTIVE',
                  deActiveAgents: 'status=DISABLED',
                  notConfirmedAgents: 'isConfirmed=false',
                  allAgents: '',
                  activeConfirmedAgents: 'status=ACTIVE&isConfirmed=true',
                  activeConfirmedNonLightAgents:
                    'status=ACTIVE&isConfirmed=true&rolePermissionType=${NON_LIGHT}'
                }[e.replace('Search', '')] || '',
              p = d || Object(l.r)(o),
              f = d ? '&departmentId=' + d : Object(c.a)(o, !0),
              h =
                '/api/v1/agents?' +
                (m ? m + '&' : '') +
                'from=' +
                t +
                '&limit=' +
                (2 * n > 200 ? 200 : 2 * n) +
                (a ? '&searchStr=*' + a + '*' : '') +
                f;
            return Object(i.a)(encodeURI(h), !1, { orgId: o.currentOrgId })
              .get()
              .then(
                function(i) {
                  return r()(
                    {},
                    Object(s.normalize)(
                      204 !== i.responseStatus ? i.data : [],
                      Object(s.arrayOf)(Object(s.schema)(u.L.AGENT_L))
                    ),
                    {
                      deptId: p,
                      from: t,
                      limit: n,
                      isNext: !!i.data && i.data.length > n,
                      searchStr: a,
                      agentType: e
                    }
                  );
                },
                function(e) {
                  throw e;
                }
              );
          }
        };
      }
      function v(e) {
        return {
          types: Object(o.m)('AGENT'),
          shouldCallAPI: function() {
            return e.length >= 1;
          },
          callAPI: function(t) {
            return Object(i.a)('/api/v1/agentsByIds?agentIds=' + e.join(), !1, {
              orgId: t.currentOrgId
            })
              .get()
              .then(function(e) {
                return Object(
                  s.normalize
                )(204 !== e.responseStatus ? e.data : [], Object(s.arrayOf)(Object(s.schema)(u.L.AGENT_L)));
              });
          }
        };
      }
      function b(e) {
        return {
          types: Object(o.m)('TEAM_AGENT'),
          callAPI: function(t) {
            return Object(i.a)('/api/v1/teams/' + e + '/members', !1, {
              orgId: t.currentOrgId
            })
              .get()
              .then(function(e) {
                return Object(
                  s.normalize
                )(e.members, Object(s.arrayOf)(Object(s.schema)(u.L.AGENT_L)));
              });
          }
        };
      }
      function y() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments[1],
          a = '';
        return (
          t.map(function(t) {
            void 0 !== e[t] && (a += '&' + t + '=' + e[t]);
          }),
          a
        );
      }
      function _() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments[1],
          a = arguments[2];
        return void 0 !== e[t] ? e[t] : a;
      }
      function C() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = _(e, 'searchType', 'string'),
          a = e.searchStr;
        return (
          a &&
            (a =
              'string*' == t ? a + '*' : '*string*' == t ? '*' + a + '*' : a),
          a
        );
      }
      function A(e) {
        var t = e.isConfirmed,
          a = e.status;
        switch (a) {
          case d.a:
            return d.a;
          case d.d:
            return d.d;
          case d.c:
            return d.c;
          default:
            if (void 0 !== t && !t) return d.l;
            if (void 0 === a) return d.b;
        }
      }
      function S() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (e.from = _(e, 'from', '1')),
          (e.limit = _(e, 'limit', '100')),
          (e.searchStr = C(e));
        var t = e.from > 1 ? d.k : d.j;
        return {
          types: Object(o.m)(t),
          callAPI: function(t) {
            var a = '/api/v1/agents?orgId=' + t.currentOrgId;
            return (
              (a += y(e, [
                'from',
                'limit',
                'status',
                'isConfirmed',
                'searchStr',
                'departmentId',
                'departmentIds',
                'profileIds',
                'roleIds'
              ])),
              Object(i.a)(a)
                .get()
                .then(function(t) {
                  return r()(
                    Object(s.normalize)(
                      void 0 !== t.data ? t.data : [],
                      Object(s.arrayOf)(Object(s.schema)(u.L.AGENT_L))
                    ),
                    { status: A(e) }
                  );
                })
            );
          }
        };
      }
      function k(e, t, a) {
        var n = { status: e, isConfirmed: t, includeLightAgent: a };
        return (
          (n.includeLightAgent = _(n, 'includeLightAgent', !0)),
          {
            types: Object(o.m)(d.i),
            callAPI: function(e) {
              var t = '/api/v1/agents/count?orgId=' + e.currentOrgId;
              return (
                (t += y(n, ['status', 'isConfirmed', 'includeLightAgent'])),
                Object(i.a)(t)
                  .get()
                  .then(function(e) {
                    return r()({}, e, { status: A(n) });
                  })
              );
            }
          }
        );
      }
      function I() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return { type: d.m, data: { isEnabled: e } };
      }
    },
    957: function(e, t, a) {
      e.exports = {
        input: 'Select-module__input',
        small: 'Select-module__small',
        medium: 'Select-module__medium',
        large: 'Select-module__large',
        emptyState:
          'Select-module__emptyState common-module__semibold common-module__ftsmooth',
        box_small: 'Select-module__box_small',
        box_medium: 'Select-module__box_medium',
        hide: 'Select-module__hide common-module__vishidden',
        container: 'Select-module__container',
        arrowIcon: 'Select-module__arrowIcon',
        box: 'Select-module__box',
        search: 'Select-module__search'
      };
    },
    958: function(e, t, a) {
      e.exports = {
        container: 'DateTime-module__container',
        header: 'DateTime-module__header',
        thArrowConatainer: 'DateTime-module__thArrowConatainer',
        thArrow: 'DateTime-module__thArrow common-module__offSelection',
        datesStr: 'DateTime-module__datesStr common-module__offSelection',
        thMonYear: 'DateTime-module__thMonYear',
        dateContainer: 'DateTime-module__dateContainer',
        days: 'DateTime-module__days',
        daysStr: 'DateTime-module__daysStr',
        dateRow: 'DateTime-module__dateRow',
        sunday: 'DateTime-module__sunday',
        today: 'DateTime-module__today',
        emptySpan: 'DateTime-module__emptySpan',
        timesection: 'DateTime-module__timesection',
        timeStr: 'DateTime-module__timeStr',
        dropDownContainer: 'DateTime-module__dropDownContainer',
        dropDown: 'DateTime-module__dropDown',
        footer: 'DateTime-module__footer',
        space: 'DateTime-module__space'
      };
    },
    959: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.browserOffset = void 0);
      var n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            };
      (t.formatDate = s),
        (t.pad = l),
        (t.replaceI18NValuesWithRegex = c),
        (t.unescapeUnicode = u),
        (t.getValues = d),
        (t.getI18NValue = function(e) {
          if (void 0 === e)
            return function(e) {
              return e;
            };
          return function(t, a) {
            var n = e[t];
            return void 0 === n ? t : u((n = c(n, a)));
          };
        }),
        (t.getI18NInfo = function(e, t, a) {
          var r = null,
            i = void 0,
            o = null;
          if ('function' == typeof t) {
            var s = t(diffObj1);
            (r = s.key), (i = d(s.params, a));
          } else
            'object' === (void 0 === t ? 'undefined' : n(t))
              ? ((r = t.key), (i = d(t.params, a)))
              : 'string' == typeof t && (o = e.format(t));
          return { key: r, values: i, text: o };
        }),
        (t.isToday = function(e, t) {
          var a = t.clone().startOf('day');
          return e.isSame(a, 'd');
        }),
        (t.isYesterday = m),
        (t.isTomorrow = function(e, t) {
          return m(t, e);
        }),
        (t.isWithinAWeek = p),
        (t.isTwoWeeksOrMore = function(e, t) {
          return !p(e, t);
        }),
        (t.userDateFormat = function(e, t) {
          return function(a, o, c, u) {
            var m = o.today,
              p = o.yesterday,
              f = o.tomorrow,
              h = o.others,
              g =
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              v = arguments[5],
              b = new Date().getTime(),
              C = new Date(a).getTime(),
              A = _(b, i, 0);
            A = _(A, 0, r.offsetMap[t]);
            var S = _(C, i, 0);
            S = _(S, 0, r.offsetMap[t]);
            var k = C - b,
              I = void 0;
            I = k < 0 ? c || '' : (k > 0 && u) || '';
            var E = y(k),
              T = 0 == E.y && E.yd <= 7,
              O = {
                h: E.h,
                m: E.m,
                s: E.s,
                y: E.y,
                hh: l(E.h, 2),
                mm: l(E.m, 2),
                ss: l(E.s, 2),
                yy: l(E.y, 2),
                days: E.yd,
                yDays: l(E.yd, 2),
                isWithInAWeek: T,
                suffix: I
              },
              x = {
                hours: E.h,
                minutes: E.m,
                seconds: E.s,
                years: E.y,
                yDays: E.yd,
                isWithInAWeek: T,
                suffix: I
              },
              N = '',
              L = [],
              P = null;
            if (v) {
              var M = void 0,
                w = void 0,
                j = void 0,
                D = void 0;
              (M = x.years > 1 ? '2' : x.years),
                (w = E.yd > 1 ? '2' : E.yd),
                (j = x.hours > 1 ? '2' : x.hours),
                (D = x.minutes > 1 ? '2' : x.minutes);
              var R = 0,
                F = [M, w, j, D].reduce(function(e, t) {
                  return (
                    2 == R || 0 == t
                      ? (e += '0')
                      : 0 != t
                        ? (R++, (e += t))
                        : (e += t),
                    e
                  );
                }, ''),
                B = v(x, F);
              B && 'object' === (void 0 === B ? 'undefined' : n(B))
                ? ((N = B.key), (L = d(B.params, O)), (g = !0))
                : 'string' == typeof B && (P = s(S, B));
            } else if (0 != E.y || (0 != E.yd && 1 != E.yd)) {
              var V = h(x);
              'object' === (void 0 === V ? 'undefined' : n(V))
                ? ((N = V.key), (L = d(V.params, O)), (g = !0))
                : 'string' == typeof V && ((P = s(S, f)), S.format(V));
            } else {
              var U = new Date(S);
              new Date(A);
              U.getDate() == curDateObj.getDate()
                ? 'object' === (void 0 === m ? 'undefined' : n(m))
                  ? ((N = m.key), (L = d(m.params, O)), (g = !0))
                  : 'string' == typeof m && (P = s(S, m))
                : U.getDate() < curDateObj.getDate()
                  ? 'object' === (void 0 === p ? 'undefined' : n(p))
                    ? ((N = p.key), (L = d(p.params, O)))
                    : 'string' == typeof p && (P = s(S, p))
                  : U.getDate() > curDateObj.getDate() &&
                    ('object' === (void 0 === f ? 'undefined' : n(f))
                      ? ((N = f.key), (L = d(f.params, O)))
                      : 'string' == typeof f && (P = s(S, f)));
            }
            var z = g && '' != I ? N + '.' + I : N;
            return P || e(z, L);
          };
        }),
        (t.getDiffObj = y),
        (t.convertTimezone = _);
      var r = a(954),
        i = (t.browserOffset = -new Date().getTimezoneOffset()),
        o = {
          dayNames: [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ],
          monthNames: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ],
          timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM']
        };
      function s(e, t) {
        var a = new Date(e),
          n = a.getDate(),
          r = a.getDay(),
          i = a.getMonth(),
          s = a.getFullYear(),
          c = a.getHours(),
          u = a.getMinutes(),
          d = a.getSeconds(),
          m = a.getMilliseconds(),
          p = {
            d: n,
            dd: l(n, 2),
            ddd: o.dayNames[r],
            dddd: o.dayNames[r + 7],
            D: n,
            DD: l(n, 2),
            DDD: o.dayNames[r],
            DDDD: o.dayNames[r + 7],
            M: i + 1,
            MM: l(i + 1, 2),
            MMM: o.monthNames[i],
            MMMM: o.monthNames[i + 12],
            yy: String(s).slice(2),
            YY: String(s).slice(2),
            yyyy: s,
            YYYY: s,
            h: c % 12 || 12,
            hh: l(c % 12 || 12, 2),
            H: c,
            HH: l(c, 2),
            m: u,
            mm: l(u, 2),
            s: d,
            ss: l(d, 2),
            l: l(m, 3),
            L: l(Math.round(m / 10)),
            t: c < 12 ? o.timeNames[0] : o.timeNames[1],
            A: c < 12 ? o.timeNames[6] : o.timeNames[7],
            T: c < 12 ? o.timeNames[4] : o.timeNames[5]
          };
        return t.replace(
          /D{1,4}|M{1,4}|YY(?:YY)?|([HhmsA])\1?|[LloSZWN]|\[[^\]]*\]|'[^']*'/g,
          function(e) {
            return e in p ? p[e] : e.slice(1, e.length - 1);
          }
        );
      }
      function l(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          a = arguments[2];
        return (
          (a = a || '0'),
          (e = '' + e).length >= t ? e : new Array(t - e.length + 1).join(a) + e
        );
      }
      function c(e, t) {
        if (void 0 !== t)
          if (Array.isArray(t))
            for (var a = 0; a < t.length; a++)
              e = e.replace(new RegExp('\\{' + a + '\\}', 'g'), t[a]);
          else e = e.replace(new RegExp('\\{0\\}', 'g'), t);
        return e;
      }
      function u(e) {
        return e.replace(/\\u([a-fA-F0-9]{4})/g, function(e, t) {
          return String.fromCharCode(parseInt(t, 16));
        });
      }
      function d() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments[1];
        return e.map(function(e) {
          return t[e];
        });
      }
      function m(e, t) {
        var a = t
          .clone()
          .subtract(1, 'days')
          .startOf('day');
        return e.isSame(a, 'd');
      }
      function p(e, t) {
        var a = t
          .clone()
          .subtract(7, 'days')
          .startOf('day');
        return e.isAfter(a);
      }
      var f = 31536e6,
        h = 864e5,
        g = 36e5,
        v = 6e4;
      function b(e) {
        return -1 !==
          e
            .toString()
            .toLowerCase()
            .indexOf('e')
          ? e.toFixed(20)
          : e;
      }
      function y(e) {
        var t = (e = Math.abs(e)) / f;
        t = b(t);
        var a = (e % f) / h;
        a = b(a);
        var n = (e % h) / g;
        n = b(n);
        var r = ((e % h) % g) / v,
          i = (((e % h) % g) % v) / 1e3;
        return (
          (a = parseInt(a)),
          (n = parseInt(n)),
          (r = parseInt(r)),
          (i = parseInt(i)),
          { y: (t = parseInt(t)), yd: a, h: n, m: r, s: i }
        );
      }
      function _(e, t, a) {
        var n = a - t;
        return (e = Number(e) + n * v);
      }
    },
    961: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.urlLicensePermissionCheckHOC = t.licensePermissionCheckHOC = void 0);
      var n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          },
        r = (function() {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var n = t[a];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function(t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t;
          };
        })(),
        i = l(a(0)),
        o = l(a(1)),
        s = (a(21), a(962));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (function(e) {
        function t(e, a) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var n = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, a));
          return (
            (n.currentPermission = e.permission || a.permission),
            (n.currentLicense = e.license || a.license),
            n
          );
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, i.default.Component),
          r(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.proxyPropsObjHasFunction,
                  a = e.getLicenseProfileCheck,
                  r = e.Component,
                  o = e.Fallback,
                  s = a(
                    t ? this.props : {},
                    this.currentPermission,
                    this.currentLicense
                  ),
                  l = s.licenseSuccess,
                  c = s.permissionSuccess,
                  u = s.permissionProps;
                return l && c
                  ? i.default.createElement(r, n({}, this.props, u))
                  : o
                    ? i.default.createElement(o, this.props)
                    : null;
              }
            }
          ]),
          t
        );
      })();
      (c.propTypes = {
        permission: o.default.object,
        license: o.default.string,
        proxyPropsObjHasFunction: o.default.func,
        getLicenseProfileCheck: o.default.func,
        Component: o.default.element,
        Fallback: o.default.element
      }),
        (c.contextTypes = {
          store: o.default.object,
          permission: o.default.object,
          license: o.default.string
        });
      var u = (t.licensePermissionCheckHOC = function(e) {
        var t = e.component,
          a = void 0 === t ? { license: '*', permission: '*' } : t,
          r = e.props,
          o = void 0 === r ? {} : r,
          l = e.Fallback,
          u = void 0 === l ? null : l,
          d = function(e, t, n) {
            var r = (0, s.permissionCheck)(t);
            return {
              licenseSuccess: (0, s.licenseCheck)(n)(a.license),
              permissionSuccess: r(a.permission),
              permissionProps: Object.keys(o).reduce(function(t, a) {
                if (o[a] instanceof Array)
                  return (
                    (t[a] = o[a]
                      .map(function(e, t) {
                        if (r(e.permission)) return e.obj;
                      })
                      .filter(function(e) {
                        return e;
                      })),
                    t
                  );
                if ('function' == typeof o[a])
                  return (
                    (n = o[a](e)),
                    r(n.permission)
                      ? (t[a] = n.obj)
                      : n.falseObj && (t[a] = n.falseObj),
                    t
                  );
                var n = o[a];
                return (
                  r(n.permission) ? (t[a] = n.obj) : (t[a] = n.falseObj), t
                );
              }, {})
            };
          },
          m = Object.keys(o).some(function(e) {
            return 'function' == typeof o[e];
          });
        return function(e) {
          return function(t) {
            return i.default.createElement(
              c,
              n({}, t, {
                proxyPropsObjHasFunction: m,
                getLicenseProfileCheck: d,
                Component: e,
                Fallback: u
              })
            );
          };
        };
      });
      t.urlLicensePermissionCheckHOC = function(e) {
        return (e.Fallback = InsufficientPrivileges), u(e);
      };
    },
    962: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = (function() {
          return function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e))
              return (function(e, t) {
                var a = [],
                  n = !0,
                  r = !1,
                  i = void 0;
                try {
                  for (
                    var o, s = e[Symbol.iterator]();
                    !(n = (o = s.next()).done) &&
                    (a.push(o.value), !t || a.length !== t);
                    n = !0
                  );
                } catch (e) {
                  (r = !0), (i = e);
                } finally {
                  try {
                    !n && s.return && s.return();
                  } finally {
                    if (r) throw i;
                  }
                }
                return a;
              })(e, t);
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            );
          };
        })(),
        r = (t.underScoreSplit = function(e) {
          return e.split('_');
        }),
        i = function(e, t) {
          for (var a = t.length, r = [], i = 0, s = void 0, l = 0; l < a; l++)
            '&' != t.charAt(l) && '|' != t.charAt(l)
              ? (void 0 === r[i] && (r[i] = ''),
                (r[i] = '' + r[i] + t.charAt(l)))
              : ((r[(i += 1)] = '' + t.charAt(l) + t.charAt(l)),
                (l += 1),
                (i += 1));
          for (
            ;
            r.length > 1 ||
            (1 == r.length && 'true' != r[0] && 'false' != r[0]);

          ) {
            var c = n(r, 3),
              u = c[0],
              d = c[1],
              m = c[2],
              p = void 0 === m ? '*' : m;
            (u = u.replace(/ /g, '')),
              (p = p.replace(/ /g, '')),
              (u = 'true' == u || ('false' != u && o(e)(u))),
              (p = 'true' == p || ('false' != p && o(e)(p || '*'))),
              (r = [
                '' + (s = '&&' == d ? u && p : '||' == d ? u || p : u)
              ].concat(r.slice(3)));
          }
          return void 0 === s && 1 == r.length && (s = 'true' == r[0]), s;
        },
        o = ((t.permissionCheck = function(e) {
          return function(t) {
            for (
              var a =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                r = t;
              -1 != r.indexOf(')');

            ) {
              var o = r.indexOf(')'),
                s = r.lastIndexOf('(', o);
              r =
                '' +
                r.substring(0, s) +
                i(e, r.substring(s + 1, o)) +
                r.substring(o + 1);
            }
            var l = i(e, r);
            return l ? a : n;
          };
        }),
        (t.singleModulePermissionCheck = function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(t) {
            var a =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              o = r(t || '*'),
              s = n(o, 2),
              l = s[0],
              c = s[1];
            return '*' == l && void 0 === c
              ? a
              : e[l]
                ? (e[l][c]
                  ? e[l][c]
                  : !(!e[l].flags || !e[l].flags[c]) && e[l].flags[c])
                  ? a
                  : i
                : (e.flags && e.flags[c]) || null
                  ? a
                  : i;
          };
        }));
      t.licenseCheck = function() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return function(t) {
          var a =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = e.licenseType;
          return '*' == t
            ? a
            : t.constructor == Array && -1 != t.indexOf(r)
              ? a
              : r == t
                ? a
                : n;
        };
      };
    },
    963: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = o(a(0)),
        r = (a(26), o(a(1))),
        i = a(955);
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e) {
        var t = e.children,
          a = e.features,
          r = e.module,
          o = e.action,
          s = t.type,
          l = t.props,
          c = (0, i.getRestriction)(a, r, o),
          u = c.isShow,
          d = c.isReadOnly,
          m = c.readOnlyMessage,
          p = void 0 === m ? '' : m;
        return u
          ? n.default.createElement(
              s,
              Object.assign({}, l, { isReadOnly: d, readOnlyMessage: p })
            )
          : null;
      }
      (s.propTypes = {
        module: r.default.string,
        children: r.default.Component,
        features: r.default.array,
        action: r.default.string
      }),
        (t.default = s);
    },
    964: function(e, t, a) {
      'use strict';
      var n, r;
      function i(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = a),
          e
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = {
        tickets: {
          isSpam: {
            secondaryContact: [1, 1],
            leftPanelForm: [1, 1],
            replyAssistant: [0, 0],
            suggestedSolution: [0, 0],
            timeline: [1, 1],
            mergeTicket: [0, 0],
            marketPlace: [0, 0],
            replyActions: [0, 0],
            followers_view: [1, 0],
            followers_add: [1, 1],
            tags_view: [1, 0],
            tags_add: [1, 1],
            shareCount: [1, 0],
            forWardOnly: [0, 0],
            moreActions: [1, 0],
            addTask: [0, 0],
            footer: [1, 0],
            edit: [0, 0],
            status: [1, 1],
            assignee: [1, 1],
            dueDate: [1, 1],
            responseDueDate: [1, 1],
            add_comment: [0, 0],
            edit_approval: [0, 0],
            add_timeentry_invoice: [0, 0]
          },
          bluePrint: { status: [1, 1], move: [1, 0] },
          ticketSharingList: {
            edit: [0, 0],
            delete: [0, 0],
            status: [1, 1],
            assign: [1, 1],
            peek: [1, 0],
            move: [1, 1],
            mass_action: [1, 1]
          },
          spam: {
            edit: [0, 0],
            show_comment: [0, 0],
            status: [1, 1],
            assign: [1, 1],
            peek: [1, 0],
            delete: [1, 0],
            move: [1, 1]
          },
          spamContact: {
            booksInteg: [0, 0],
            invoiceInteg: [0, 0],
            jira: [0, 0],
            bugtracker: [0, 0],
            add_timeentry_invoice: [0, 0]
          },
          anonymousContact: {
            booksInteg: [0, 0],
            invoiceInteg: [0, 0],
            jira: [0, 0],
            bugtracker: [0, 0],
            add_timeentry_invoice: [0, 0]
          },
          trash: ((n = {
            edit: [0, 0],
            peek: [0, 0],
            delete: [0, 0],
            show_comment: [0, 0],
            status: [1, 1],
            assign: [1, 1]
          }),
          i(n, 'peek', [1, 0]),
          i(n, 'move', [1, 1]),
          n),
          notAccessible: ((r = {
            edit: [0, 0],
            peek: [0, 0],
            delete: [0, 0],
            show_comment: [0, 0],
            status: [1, 1],
            assign: [1, 1]
          }),
          i(r, 'peek', [1, 0]),
          i(r, 'move', [1, 1]),
          i(r, 'mass_action', [1, 1]),
          r)
        },
        contacts: {
          anonymous: {
            edit: [0, 0],
            follow: [0, 0],
            add_tickets: [0, 0],
            add_products: [0, 0],
            add_attachments: [0, 0],
            add_activies: [0, 0],
            add_comment: [0, 0],
            edit_comment: [0, 0],
            mass_action: [1, 1],
            massUpdate: [0, 0],
            massMerge: [0, 0],
            booksInteg: [0, 0],
            invoiceInteg: [0, 0],
            add_timeentry_invoice: [0, 0]
          },
          spam: {
            edit: [0, 0],
            add_tickets: [0, 0],
            massUpdate: [0, 0],
            massMerge: [0, 0],
            follow: [0, 0],
            add_call: [0, 0],
            add_activies: [0, 0],
            add_timentry: [0, 0],
            edit_timeentry: [0, 0],
            delete_timeentry: [0, 0],
            remove_products: [0, 0],
            add_products: [0, 0],
            add_attachments: [0, 0],
            add_comment: [0, 0],
            edit_comment: [0, 0],
            delete_comment: [0, 0],
            add_as_enduser: [0, 0],
            booksInteg: [0, 0],
            invoiceInteg: [0, 0],
            add_timeentry_invoice: [0, 0],
            comment_more: [0, 0]
          }
        },
        accounts: { spamContacts: { disassociate: [0, 0] } },
        tasks: {}
      };
      o.tickets = Object.assign({}, o.tickets, {
        TS_READ_WRITE: {
          timeline: [0, 0],
          leftPanelForm: [1, 0],
          followers_view: [1, 0],
          followers_add: [1, 1],
          tags_view: [1, 0],
          tags_add: [1, 1],
          shareCount: [1, 0],
          forWardOnly: [0, 0],
          moreActions: [0, 0],
          addTask: [0, 0],
          footer: [0, 0],
          edit: [0, 0],
          status: [1, 1],
          assignee: [1, 1],
          dueDate: [1, 1],
          responseDueDate: [1, 1],
          booksInteg: [0, 0],
          invoiceInteg: [0, 0],
          jira: [0, 0],
          bugtracker: [0, 0]
        },
        TS_RESTRICTED_ACCESS: {
          timeline: [0, 0],
          leftPanelForm: [0, 0],
          followers_view: [0, 0],
          followers_add: [0, 0],
          tags_view: [0, 0],
          tags_add: [0, 0],
          shareCount: [0, 0],
          forWardOnly: [1, 0],
          moreActions: [0, 0],
          addTask: [0, 0],
          footer: [0, 0],
          edit: [0, 0],
          status: [1, 1],
          assignee: [1, 1],
          dueDate: [1, 1],
          responseDueDate: [1, 1],
          booksInteg: [0, 0],
          invoiceInteg: [0, 0],
          jira: [0, 0],
          bugtracker: [0, 0]
        },
        TS_READ_ONLY: {
          timeline: [0, 0],
          leftPanelForm: [1, 0],
          followers_view: [1, 0],
          followers_add: [1, 1],
          tags_view: [1, 0],
          tags_add: [1, 1],
          shareCount: [1, 0],
          forWardOnly: [0, 0],
          moreActions: [0, 0],
          addTask: [0, 0],
          footer: [0, 0],
          edit: [0, 0],
          status: [1, 1],
          assignee: [1, 1],
          dueDate: [1, 1],
          responseDueDate: [1, 1],
          booksInteg: [0, 0],
          invoiceInteg: [0, 0],
          jira: [0, 0],
          bugtracker: [0, 0]
        }
      });
      (t.restrictionRules = o),
        (t.lockMessages = {
          tickets: {
            TS_READ_WRITE: {
              status: 'support.ticketshare.field.locked',
              assignee: 'support.ticketshare.field.locked',
              dueDate: 'support.ticketshare.field.locked',
              responseDueDate: 'support.ticketshare.field.locked'
            },
            TS_RESTRICTED_ACCESS: {
              status: 'support.ticketshare.field.locked',
              assignee: 'support.ticketshare.field.locked',
              dueDate: 'support.ticketshare.field.locked',
              responseDueDate: 'support.ticketshare.field.locked'
            },
            TS_READ_ONLY: {
              status: 'support.ticketshare.field.locked',
              assignee: 'support.ticketshare.field.locked',
              dueDate: 'support.ticketshare.field.locked',
              responseDueDate: 'support.ticketshare.field.lock ed'
            },
            bluePrint: { status: 'support.blueprints.status.lock.msg' }
          }
        });
    },
    965: function(e, t, a) {
      e.exports = {
        item: 'MassAction-module__item',
        itemOuterSapce: 'MassAction-module__itemOuterSapce',
        massItem:
          'MassAction-module__massItem MassAction-module__itemOuterSapce',
        checkMassItem:
          'MassAction-module__checkMassItem MassAction-module__itemOuterSapce',
        massIcon: 'MassAction-module__massIcon',
        massLabel:
          'MassAction-module__massLabel common-module__dotted common-module__oflow common-module__ellipsis',
        massCount: 'MassAction-module__massCount',
        dark: 'MassAction-module__dark',
        danger: 'MassAction-module__danger',
        check: 'MassAction-module__check',
        secondary: 'MassAction-module__secondary',
        ticketLp: 'MassAction-module__ticketLp',
        primary: 'MassAction-module__primary',
        ticketLpicon: 'MassAction-module__ticketLpicon',
        small: 'MassAction-module__small',
        medium: 'MassAction-module__medium',
        Hiddenicon: 'MassAction-module__Hiddenicon'
      };
    },
    967: function(e, t, a) {
      'use strict';
      var n = a(12),
        r = a.n(n),
        i = a(9),
        o = a.n(i),
        s = a(10),
        l = a.n(s),
        c = a(13),
        u = a.n(c),
        d = a(14),
        m = a.n(d),
        p = a(0),
        f = a.n(p),
        h = a(1),
        g = a.n(h),
        v = a(995),
        b = a.n(v),
        y = a(64),
        _ = a.n(y),
        C = a(6),
        A = a(30),
        S = a(16),
        k = (function(e) {
          function t(e) {
            o()(this, t);
            var a = u()(this, (t.__proto__ || r()(t)).call(this, e));
            return (a.getSelectedItemRef = a.getSelectedItemRef.bind(a)), a;
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'getSelectedItemRef',
                value: function(e) {
                  this.props.selectRef(e);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.agentsList,
                    n = t.closePopupOnly,
                    r = t.onChangeAssignee,
                    i = t.selectedIndex,
                    o = t.addFollower,
                    s = t.page,
                    l = t.selectedAgentId,
                    c = t.selectedTeamId,
                    u = void 0 === c ? null : c,
                    d = t.namePattern,
                    m = t.dataId;
                  return f.a.createElement(
                    'div',
                    { className: b.a.posrel, 'data-id': m || 'agentList' },
                    a.map(function(t, a) {
                      var c = t.id,
                        m = t.firstName,
                        p = t.lastName,
                        h = t.photoURL,
                        g = t.rolePermissionType,
                        v = Object(C.f)(d, m, p);
                      return 'Light' != g
                        ? f.a.createElement(
                            S.Container,
                            {
                              isCover: !1,
                              alignBox: 'row',
                              align: 'vertical',
                              className:
                                c == l
                                  ? b.a.selectedItem
                                  : b.a.item +
                                    ' ' +
                                    (a == i ? b.a.hoverItem : ''),
                              dataId: 'agent_' + c,
                              key: a,
                              onClick: function(e) {
                                n(e),
                                  'followers' == s
                                    ? o(c)
                                    : r({ assigneeId: c, teamId: u });
                              },
                              eleRef: a == i ? e.getSelectedItemRef : null
                            },
                            h
                              ? f.a.createElement(_.a, {
                                  name: v,
                                  size: 'xsmall',
                                  src: h
                                })
                              : f.a.createElement(_.a, {
                                  name: v,
                                  size: 'xsmall'
                                }),
                            f.a.createElement(
                              'span',
                              { className: b.a.assignName },
                              v
                            ),
                            f.a.createElement(
                              'span',
                              { className: b.a.text },
                              c == l
                                ? f.a.createElement(
                                    'span',
                                    { className: b.a.markedIcon },
                                    f.a.createElement(A.CustomersFontIcon, {
                                      color: 'primary',
                                      isBold: !0,
                                      name: 'checkmarkO',
                                      size: '17'
                                    })
                                  )
                                : null
                            )
                          )
                        : null;
                    })
                  );
                }
              }
            ]),
            t
          );
        })(f.a.Component);
      (t.a = k),
        (k.propTypes = {
          addFollower: g.a.func,
          agentsList: g.a.array,
          closePopupOnly: g.a.func,
          namePattern: g.a.array,
          onChangeAssignee: g.a.func,
          page: g.a.string,
          selectRef: g.a.func,
          selectedAgentId: g.a.string,
          selectedIndex: g.a.number,
          selectedTeamId: g.a.bool
        });
    },
    970: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = (function() {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var n = t[a];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function(t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t;
          };
        })(),
        r = p(a(0)),
        i = p(a(1)),
        o = p(a(971)),
        s = p(a(80)),
        l = p(a(99)),
        c = p(a(978)),
        u = p(a(979)),
        d = a(959),
        m = a(954);
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var f = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var a = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          (a.handleSelect = a.handleSelect.bind(a)),
            (a.handleTogglePopup = a.handleTogglePopup.bind(a)),
            (a.handleGetDisplayText = a.handleGetDisplayText.bind(a));
          var n = a.handleGetDisplayText(e);
          return (a.state = { selected: e.value, displayText: n }), a;
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, r.default.Component),
          n(t, [
            {
              key: 'componentDidMount',
              value: function() {
                var e = this.props.validation,
                  t = this.state.selected;
                e && e.validate && this.validateOnSelect(t, this.props);
              }
            },
            {
              key: 'componentDidUpdate',
              value: function(e) {
                var t = this.state.selected,
                  a = this.props,
                  n = a.value,
                  r = a.validation;
                if (
                  (r && r.validate && this.validateOnSelect(t, this.props),
                  n !== e.value)
                ) {
                  var i = this.handleGetDisplayText(this.props);
                  this.setState({ selected: n, displayText: i });
                }
              }
            },
            {
              key: 'handleSelect',
              value: function(e, t) {
                var a = this.props,
                  n = a.id,
                  r = a.onSelect,
                  i = a.closePopupOnly,
                  o = a.validation,
                  s = a.isDateTime,
                  l = e ? e.toISOString() : '',
                  c = s ? l : (0, d.formatDate)(l, 'YYYY-MM-DD');
                if (o && o.validateOn) {
                  var u = this.state.selected;
                  this.validateOnSelect(u, this.props);
                }
                r && r(c, n), i(t);
              }
            },
            {
              key: 'validateOnSelect',
              value: function(e, t) {
                var a = t.validation,
                  n = t.onPassValidation,
                  r = t.onFailValidation,
                  i = this.elementRef;
                if (a) {
                  var o = {
                    validation: u.default.combinePropsValidation(
                      this.props,
                      'onegroup',
                      'onSelect',
                      a,
                      ['required'],
                      ['required']
                    ),
                    onPassValidation: n,
                    onFailValidation: r
                  };
                  u.default.executeValidation(e, i, o, 'onegroup');
                } else n && n(e, i);
              }
            },
            {
              key: 'handleTogglePopup',
              value: function(e) {
                var t = this.props,
                  a = t.togglePopup,
                  n = t.defaultPosition;
                a(e, (void 0 === n ? 'bottom' : n) + 'Right');
              }
            },
            {
              key: 'handleGetDisplayText',
              value: function(e) {
                var t = e.timeZone,
                  a = e.displayFormat,
                  n = e.isDateTime,
                  r = e.value,
                  i = '',
                  o = new Date(r).valueOf();
                if (o) {
                  var s = m.offsetMap[t] ? m.offsetMap[t] : d.browserOffset;
                  (i = (0, d.convertTimezone)(o, d.browserOffset, 0)),
                    (i = (0, d.convertTimezone)(i, 0, s));
                }
                return i ? (0, d.formatDate)(i, n ? a + ' hh:mm A' : a) : '';
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.removeClose,
                  a = e.minErrorText,
                  n = e.maxErrorText,
                  i = e.min,
                  s = e.max,
                  u = e.placeholder,
                  d = e.isPopupOpen,
                  m = e.isPopupReady,
                  p = e.isDateTime,
                  f = e.position,
                  h = e.textBoxVariant,
                  g = e.textBoxSize,
                  v = e.children,
                  b = void 0 === v ? null : v,
                  y = e.getRef,
                  _ = e.isDisabled,
                  C = e.getContainerRef,
                  A = e.getTargetRef,
                  S = e.timeZone,
                  k = e.isReadOnly,
                  I = e.dataId,
                  E = e.dataIdWidgetWithChild,
                  T = e.portalId,
                  O = e.subPortalId,
                  x = e.className,
                  N = e.needBorder,
                  L = this.state,
                  P = L.selected,
                  M = void 0 === P ? '' : P,
                  w = L.displayText;
                return r.default.createElement(
                  'div',
                  { className: c.default.container + '   ' },
                  b
                    ? r.default.createElement(
                        'div',
                        {
                          'data-id': E,
                          onClick: _ || k ? null : this.handleTogglePopup,
                          ref: A,
                          className:
                            (x || '') +
                            ' ' +
                            (_ ? c.default.disabled : c.default.enabled)
                        },
                        b
                      )
                    : r.default.createElement(
                        'div',
                        {
                          'data-id': 'widgetWOChild',
                          className:
                            (x || '') +
                            ' ' +
                            c.default.textBox +
                            ' ' +
                            (d && !_ ? c.default.textBoxFocus : '') +
                            ' ' +
                            (_
                              ? c.default.disabled
                              : k
                                ? c.default.readOnly
                                : c.default.enabled),
                          onClick: _ || k ? null : this.handleTogglePopup,
                          ref: A
                        },
                        r.default.createElement(l.default, {
                          value: w || u,
                          isReadOnly: !0,
                          needBorder: !1,
                          size: g,
                          variant: h,
                          inputRef: y,
                          isDisabled: _,
                          dataId: I,
                          needReadOnlyStyle: !1
                        }),
                        N
                          ? r.default.createElement('div', {
                              className: c.default.inputLine
                            })
                          : null
                      ),
                  k || _
                    ? null
                    : r.default.createElement(o.default, {
                        value: M,
                        isDateTimeField: p,
                        onSelect: this.handleSelect,
                        timeZone: S,
                        min: i,
                        max: s,
                        maxErrorText: n,
                        minErrorText: a,
                        position: f,
                        isReady: d,
                        isActive: m,
                        getRef: C,
                        onClick: t,
                        portalId: T,
                        subPortalId: O
                      })
                );
              }
            }
          ]),
          t
        );
      })();
      (f.defaultProps = {
        dataIdWidgetWithChild: 'widgetWithChild',
        displayFormat: 'MM/DD/YYYY',
        isDateTime: !1,
        isDisabled: !1,
        isReadOnly: !1,
        needBorder: !0,
        placeholder: '-None-',
        textBoxSize: 'medium',
        textBoxVariant: 'default'
      }),
        (f.propTypes = {
          children: i.default.object,
          className: i.default.string,
          closePopupOnly: i.default.func,
          dataId: i.default.string,
          dataIdWidgetWithChild: i.default.string,
          defaultPosition: i.default.oneOf(['top', 'bottom', 'right', 'left']),
          displayFormat: i.default.oneOf([
            'M/D/YYYY',
            'D/M/YYYY',
            'YYYY/D/M',
            'YYYY/M/D',
            'MM/DD/YYYY'
          ]),
          getContainerRef: i.default.func,
          getRef: i.default.func,
          getTargetRef: i.default.func,
          id: i.default.string,
          isDateTime: i.default.bool,
          isDisabled: i.default.bool,
          isPopupOpen: i.default.bool,
          isPopupReady: i.default.bool,
          isReadOnly: i.default.bool,
          max: i.default.string,
          maxErrorText: i.default.string,
          min: i.default.string,
          minErrorText: i.default.string,
          needBorder: i.default.bool,
          onFailValidation: i.default.func,
          onPassValidation: i.default.func,
          onSelect: i.default.func,
          placeholder: i.default.string,
          portalId: i.default.string,
          position: i.default.string,
          removeClose: i.default.func,
          subPortalId: i.default.string,
          textBoxSize: i.default.string,
          textBoxVariant: i.default.string,
          timeZone: i.default.string,
          togglePopup: i.default.func,
          validation: i.default.shape({
            validate: i.default.bool,
            validateOn: i.default.string,
            rulesOrder: i.default.arrayOf(i.default.string),
            rules: i.default.object,
            messages: i.default.object
          }),
          value: i.default.string
        }),
        (f.propTypesDescription = {
          isReadOnly: ' ',
          isDisabled: ' ',
          value: ' ',
          onSelect: ' ',
          minErrorText: ' ',
          maxErrorText: ' ',
          isDateTime: ' ',
          position: ' ',
          timeZone: ' ',
          placeholder: ' ',
          getRef: ' ',
          textBoxSize: ' ',
          textBoxVariant: ' '
        });
      var h = (0, s.default)(f);
      (h.propTypes = f.propTypes),
        (h.defaultProps = f.defaultProps),
        (t.default = h);
    },
    971: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.Span = void 0);
      var n = (function() {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var n = t[a];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function(t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t;
          };
        })(),
        r = f(a(0)),
        i = f(a(1)),
        o = f(a(975)),
        s = f(a(958)),
        l = a(16),
        c = f(a(949)),
        u = f(a(73)),
        d = f(a(72)),
        m = a(959),
        p = a(954);
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function h(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function g(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function v(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var b = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        y = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ];
      var _ = (function(e) {
        function t(e) {
          h(this, t);
          var a = g(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return (
            (a.getHours = a.getHours.bind(a)),
            (a.amPmSelect = a.amPmSelect.bind(a)),
            (a.hoursSelect = a.hoursSelect.bind(a)),
            (a.dateSelect = a.dateSelect.bind(a)),
            (a.timeSelect = a.timeSelect.bind(a)),
            (a.handleClear = a.handleClear.bind(a)),
            (a.handleSelect = a.handleSelect.bind(a)),
            (a.minutesSelect = a.minutesSelect.bind(a)),
            (a.modifyCalendar = a.modifyCalendar.bind(a)),
            (a.hourSuggestions = (function() {
              for (var e = [], t = 1; t <= 12; t++) {
                var a = t < 10 ? '0' + t : '' + t;
                e.push({ id: a, text: a });
              }
              return e;
            })()),
            (a.minSuggestions = (function() {
              for (var e = [], t = 0; t <= 59; t++) {
                var a = t < 10 ? '0' + t : '' + t;
                e.push({ id: a, text: a });
              }
              return e;
            })()),
            (a.ampmSuggestions = [
              { id: 'AM', text: 'AM' },
              { id: 'PM', text: 'PM' }
            ]),
            (a.state = a.getStateFromProps(e)),
            a
          );
        }
        return (
          v(t, r.default.Component),
          n(t, [
            {
              key: 'componentDidUpdate',
              value: function(e) {
                var t = this.props.value;
                e.value !== t &&
                  this.setState(this.getStateFromProps(this.props));
              }
            },
            {
              key: 'getStateFromProps',
              value: function(e) {
                var t,
                  a,
                  n,
                  r,
                  i = void 0,
                  o = void 0,
                  s = void 0,
                  l = e.value,
                  c = e.timeZone,
                  u = l ? new Date(l).valueOf() : '';
                u || (u = new Date().valueOf());
                var d = '',
                  f = p.offsetMap[c] ? p.offsetMap[c] : m.browserOffset;
                return (
                  (d = (0, m.convertTimezone)(u, m.browserOffset, 0)),
                  (d = (0, m.convertTimezone)(d, 0, f)),
                  (t = (s = new Date(d)).getDate()),
                  (a = s.getMonth()),
                  (n = s.getFullYear()),
                  (r = (i = s.getHours()) < 12 ? 'AM' : 'PM'),
                  {
                    date: t,
                    month: a,
                    year: n,
                    mins: (o = (o = s.getMinutes()) < 10 ? '0' + o : o),
                    hours: (i = this.getHours(i)),
                    amPm: r
                  }
                );
              }
            },
            {
              key: 'getHours',
              value: function(e) {
                var t = e;
                return (
                  0 === t ? (t = 12) : t > 12 && (t -= 12),
                  (t = t < 10 ? '0' + t : t)
                );
              }
            },
            {
              key: 'handleSelect',
              value: function(e) {
                e.preventDefault();
                var t = this.props,
                  a = t.min,
                  n = t.max,
                  r = t.onError,
                  i = t.onSelect,
                  o = t.minErrorText,
                  s = t.maxErrorText,
                  l = t.timeZone,
                  c = t.isDateTimeField,
                  u = this.state,
                  d = u.year,
                  f = u.month,
                  h = u.date,
                  g = u.hours,
                  v = u.mins,
                  b = u.amPm;
                12 === g && (g = 'AM' === b ? 0 : 12),
                  'PM' === b && g < 12 && (g = parseInt(g) + 12);
                var y = null,
                  _ = null,
                  C = p.offsetMap[l] ? p.offsetMap[l] : m.browserOffset;
                a &&
                  ((y = a.valueOf()),
                  (y = (0, m.convertTimezone)(y, C, 0)),
                  (y = (0, m.convertTimezone)(y, 0, m.browserOffset))),
                  n &&
                    ((_ = n.valueOf()),
                    (_ = (0, m.convertTimezone)(_, C, 0)),
                    (_ = (0, m.convertTimezone)(_, 0, m.browserOffset)));
                var A = new Date(
                  c
                    ? d + '/' + (f + 1) + '/' + h + ' ' + g + ':' + v
                    : d + '/' + (f + 1) + '/' + h
                );
                (A = (0, m.convertTimezone)(A, C, 0)),
                  (A = (0, m.convertTimezone)(A, 0, m.browserOffset));
                var S = new Date(A);
                y && y > A ? r(o, !0) : _ && _ < A ? r(s, !0) : i(S, e);
              }
            },
            {
              key: 'handleClear',
              value: function(e) {
                (0, this.props.onSelect)('', e);
              }
            },
            {
              key: 'dateSelect',
              value: function(e, t, a) {
                this.setState({ date: e, month: t, year: a });
              }
            },
            {
              key: 'timeSelect',
              value: function(e, t, a) {
                this.setState({ hours: e, mins: t, amPm: a });
              }
            },
            {
              key: 'hoursSelect',
              value: function(e) {
                this.setState({ hours: e });
              }
            },
            {
              key: 'minutesSelect',
              value: function(e) {
                this.setState({ mins: e });
              }
            },
            {
              key: 'amPmSelect',
              value: function(e) {
                this.setState({ amPm: e });
              }
            },
            {
              key: 'closePopup',
              value: function() {
                closeGroupPopups('dropdown');
              }
            },
            {
              key: 'modifyCalendar',
              value: function(e) {
                var t = this.state,
                  a = t.year,
                  n = t.month;
                'gg' === e
                  ? this.setState({ year: a + 1 })
                  : 'll' === e
                    ? this.setState({ year: a - 1 })
                    : 'g' === e
                      ? (11 === n ? ((n = 0), a++) : n++,
                        this.setState({ year: a, month: n }))
                      : (0 === n ? ((n = 11), a--) : n--,
                        this.setState({ year: a, month: n }));
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.state,
                  t = e.date,
                  a = e.month,
                  n = e.year,
                  i = e.hours,
                  m = e.mins,
                  p = e.amPm,
                  f = (function(e, t, a) {
                    return (
                      1 === a &&
                        (b[1] =
                          t % 400 == 0 || (t % 4 == 0 && t % 100 != 0)
                            ? 29
                            : 28),
                      y[a] + ' ' + t
                    );
                  })(0, n, a),
                  h = this.props,
                  g = h.isDateTimeField,
                  v = h.position,
                  _ = h.isActive,
                  A = h.isReady,
                  S = h.getRef,
                  k = h.onClick,
                  I = h.dataIdPrevYear,
                  E = h.dataIdPrevMonth,
                  T = h.dataIdResultString,
                  O = h.dataIdNextyear,
                  x = h.portalId,
                  N = h.subPortalId;
                return A
                  ? r.default.createElement(
                      d.default,
                      {
                        size: 'mlarge',
                        boxPosition: v,
                        isActive: _,
                        isArrow: !1,
                        isAnimate: !0,
                        animationStyle: 'bounce',
                        getRef: S,
                        onClick: k,
                        portalId: x
                      },
                      r.default.createElement(
                        'div',
                        {
                          className: s.default.container,
                          'data-id': 'Calendar',
                          onClick: this.closePopup
                        },
                        r.default.createElement(
                          l.Container,
                          {
                            alignBox: 'row',
                            align: 'both',
                            className: s.default.header
                          },
                          r.default.createElement(
                            C,
                            {
                              dataTitle: 'prevYear',
                              dataId: I,
                              modifyCalendar: this.modifyCalendar,
                              type: 'll'
                            },
                            '<<'
                          ),
                          r.default.createElement(
                            C,
                            {
                              dataId: E,
                              modifyCalendar: this.modifyCalendar,
                              type: 'l'
                            },
                            '<'
                          ),
                          r.default.createElement(
                            l.Box,
                            { flexible: !0 },
                            r.default.createElement(
                              'span',
                              { 'data-id': T, className: s.default.thMonYear },
                              f
                            )
                          ),
                          r.default.createElement(
                            C,
                            {
                              dataId: 'DateContainer',
                              modifyCalendar: this.modifyCalendar,
                              type: 'g'
                            },
                            '>'
                          ),
                          r.default.createElement(
                            C,
                            {
                              dataId: O,
                              modifyCalendar: this.modifyCalendar,
                              type: 'gg'
                            },
                            '>>'
                          )
                        ),
                        r.default.createElement(
                          l.Container,
                          {
                            alignBox: 'row',
                            align: 'both',
                            className: s.default.days
                          },
                          r.default.createElement(
                            l.Box,
                            { flexible: !0 },
                            r.default.createElement(
                              'span',
                              {
                                className:
                                  s.default.daysStr + ' ' + s.default.sunday
                              },
                              'Sun'
                            )
                          ),
                          r.default.createElement(
                            l.Box,
                            { flexible: !0 },
                            r.default.createElement(
                              'span',
                              { className: s.default.daysStr },
                              'Mon'
                            )
                          ),
                          r.default.createElement(
                            l.Box,
                            { flexible: !0 },
                            r.default.createElement(
                              'span',
                              { className: s.default.daysStr },
                              'Tue'
                            )
                          ),
                          r.default.createElement(
                            l.Box,
                            { flexible: !0 },
                            r.default.createElement(
                              'span',
                              { className: s.default.daysStr },
                              'Wed'
                            )
                          ),
                          r.default.createElement(
                            l.Box,
                            { flexible: !0 },
                            r.default.createElement(
                              'span',
                              { className: s.default.daysStr },
                              'Thu'
                            )
                          ),
                          r.default.createElement(
                            l.Box,
                            { flexible: !0 },
                            r.default.createElement(
                              'span',
                              { className: s.default.daysStr },
                              'Fri'
                            )
                          ),
                          r.default.createElement(
                            l.Box,
                            { flexible: !0 },
                            r.default.createElement(
                              'span',
                              { className: s.default.daysStr },
                              'Sat'
                            )
                          )
                        ),
                        r.default.createElement(o.default, {
                          date: t,
                          year: n,
                          month: a,
                          onSelect: this.dateSelect
                        }),
                        g &&
                          r.default.createElement(
                            l.Container,
                            {
                              alignBox: 'row',
                              align: 'vertical',
                              className: s.default.timesection,
                              isCover: !1
                            },
                            r.default.createElement(
                              'span',
                              { className: s.default.timeStr },
                              'Time'
                            ),
                            r.default.createElement(
                              l.Box,
                              {
                                flexible: !0,
                                className: s.default.dropDownContainer
                              },
                              r.default.createElement(c.default, {
                                options: this.hourSuggestions,
                                onChange: this.hoursSelect,
                                selectedValue: i,
                                needSearch: !0,
                                emptyMessage: 'No search results',
                                animationStyle: 'bounce',
                                textBoxSize: 'xmedium',
                                textBoxVariant: 'primary',
                                searchBoxSize: 'xmedium',
                                searchBoxPlaceHolder: '',
                                maxLength: '2',
                                popupGroup: 'calender',
                                size: 'small',
                                portalId: N
                              })
                            ),
                            r.default.createElement(
                              l.Box,
                              {
                                flexible: !0,
                                className: s.default.dropDownContainer
                              },
                              r.default.createElement(c.default, {
                                options: this.minSuggestions,
                                onChange: this.minutesSelect,
                                selectedValue: m,
                                needSearch: !0,
                                emptyMessage: 'No search results',
                                animationStyle: 'bounce',
                                textBoxSize: 'xmedium',
                                textBoxVariant: 'primary',
                                searchBoxSize: 'xmedium',
                                searchBoxPlaceHolder: '',
                                maxLength: '2',
                                popupGroup: 'calender',
                                size: 'small',
                                portalId: N
                              })
                            ),
                            r.default.createElement(
                              l.Box,
                              {
                                flexible: !0,
                                className: s.default.dropDownContainer
                              },
                              r.default.createElement(c.default, {
                                options: this.ampmSuggestions,
                                onChange: this.amPmSelect,
                                selectedValue: p,
                                emptyMessage: 'No matches found',
                                animationStyle: 'bounce',
                                textBoxSize: 'xmedium',
                                textBoxVariant: 'primary',
                                maxLength: '2',
                                popupGroup: 'calender',
                                size: 'small',
                                portalId: N
                              })
                            )
                          ),
                        r.default.createElement(
                          l.Container,
                          {
                            isCover: !1,
                            align: 'horizontal',
                            alignBox: 'row',
                            className: s.default.footer
                          },
                          r.default.createElement(u.default, {
                            text: 'Set',
                            size: 'medium',
                            palette: 'primaryFilled',
                            onClick: this.handleSelect,
                            dataId: 'savebtn'
                          }),
                          r.default.createElement('span', {
                            className: s.default.space
                          }),
                          r.default.createElement(u.default, {
                            text: 'Clear',
                            size: 'medium',
                            palette: 'secondary',
                            onClick: this.handleClear
                          })
                        )
                      )
                    )
                  : null;
              }
            }
          ]),
          t
        );
      })();
      (t.default = _),
        (_.propTypes = {
          dataIdDateTime: i.default.string,
          dataIdNextMonth: i.default.string,
          dataIdNextyear: i.default.string,
          dataIdPrevMonth: i.default.string,
          dataIdPrevYear: i.default.string,
          dataIdResultString: i.default.string,
          getRef: i.default.func,
          isActive: i.default.bool,
          isDateTimeField: i.default.bool,
          isReady: i.default.bool,
          max: i.default.string,
          maxErrorText: i.default.string,
          min: i.default.string,
          minErrorText: i.default.string,
          onClick: i.default.func,
          onError: i.default.func,
          onSelect: i.default.func,
          portalId: i.default.string,
          position: i.default.string,
          subPortalId: i.default.string,
          timeZone: i.default.string,
          value: i.default.string
        }),
        (_.defaultProps = {
          dataIdDateTime: 'dateTimeComp',
          dataIdNextMonth: 'nextMonth',
          dataIdNextyear: 'nextyear',
          dataIdPrevMonth: 'prevMonth',
          dataIdPrevYear: 'prevYear',
          dataIdResultString: 'resultString',
          isDateTimeField: !0
        });
      var C = (t.Span = (function(e) {
        function t(e) {
          h(this, t);
          var a = g(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return (a.modifyCalendarChild = a.modifyCalendarChild.bind(a)), a;
        }
        return (
          v(t, r.default.Component),
          n(t, [
            {
              key: 'modifyCalendarChild',
              value: function() {
                var e = this.props;
                (0, e.modifyCalendar)(e.type);
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.dataTitle,
                  a = e.children,
                  n = e.dataId;
                return r.default.createElement(
                  'div',
                  { className: s.default.thArrowConatainer },
                  r.default.createElement(
                    'span',
                    {
                      'data-title': t,
                      'data-id': n,
                      className: s.default.thArrow,
                      onClick: this.modifyCalendarChild
                    },
                    a
                  )
                );
              }
            }
          ]),
          t
        );
      })());
      C.propTypes = {
        children: i.default.node,
        dataId: i.default.string,
        dataTitle: i.default.string,
        modifyCalendar: i.default.func,
        type: i.default.string
      };
    },
    974: function(e, t, a) {
      'use strict';
      a.d(t, 'a', function() {
        return p;
      });
      var n = a(2),
        r = a.n(n),
        i = a(21),
        o = a(17),
        s = a(19),
        l = a.n(s),
        c = a(6),
        u = [],
        d = {},
        m = Object(i.createSelector)(
          [
            function(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return l()('module.agent', e) || t.agents || d;
            },
            function(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return t.agentIds || u;
            },
            o.L
          ],
          function(e, t, a) {
            var n = [];
            return (
              t.forEach(function(t) {
                var i = e[t],
                  o = i || {},
                  s = o.name,
                  l = void 0 === s ? '' : s,
                  u = o.firstName,
                  d = void 0 === u ? '' : u,
                  m = o.lastName,
                  p = void 0 === m ? '' : m;
                (l = d || p ? Object(c.f)(a, d, p) : l),
                  i && n.push(r()({}, i, { name: l }));
              }),
              n
            );
          }
        ),
        p = function() {
          return m;
        };
    },
    975: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.Span = void 0);
      var n = (function() {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var n = t[a];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function(t, a, n) {
            return a && e(t.prototype, a), n && e(t, n), t;
          };
        })(),
        r = l(a(0)),
        i = l(a(1)),
        o = l(a(958)),
        s = a(16);
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function u(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function d(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        p = (function(e) {
          function t(e) {
            c(this, t);
            var a = u(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
            );
            return (a.handleSelect = a.handleSelect.bind(a)), a;
          }
          return (
            d(t, r.default.Component),
            n(t, [
              {
                key: 'handleSelect',
                value: function(e, t, a) {
                  (0, this.props.onSelect)(e, t, a);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.date,
                    n = t.year,
                    i = t.month,
                    l = t.dataId,
                    c = new Date(n, i, 1),
                    u = c.getDay() + 1,
                    d = c.getFullYear(),
                    p = c.getMonth(),
                    h = 5;
                  (31 === m[i] && u >= 6) || (30 === m[i] && 7 === u)
                    ? (h = 6)
                    : 28 === m[i] && 1 === u && (h = 4);
                  var g = 1,
                    v = 1,
                    b = (function() {
                      for (var t = [], l = 1; l <= h; l++) {
                        for (var c = [], b = null, y = 1; y < 8; y++) {
                          if (v >= u && g <= m[i]) {
                            var _ = o.default.datesStr;
                            1 === y && (_ += ' ' + o.default.sunday),
                              g === parseInt(a) &&
                                parseInt(i) === p &&
                                parseInt(n) === d &&
                                (_ += ' ' + o.default.today),
                              (b = r.default.createElement(f, {
                                i: y,
                                tdclass: _,
                                handleSelect: e.handleSelect,
                                incremday: g,
                                userSeeMonth: p,
                                userSeeYear: d,
                                dataId: 'property'
                              })),
                              g++;
                          } else
                            b = r.default.createElement(
                              s.Box,
                              { flexible: !0 },
                              r.default.createElement('span', {
                                key: y,
                                className: o.default.emptySpan
                              })
                            );
                          v++, c.push(b);
                        }
                        t.push(
                          r.default.createElement(
                            s.Container,
                            {
                              key: l,
                              alignBox: 'row',
                              align: 'both',
                              isCover: !1,
                              className: o.default.dateRow
                            },
                            c
                          )
                        );
                      }
                      return t;
                    })();
                  return r.default.createElement(
                    'div',
                    { 'data-id': l, className: o.default.dateContainer },
                    b
                  );
                }
              }
            ]),
            t
          );
        })();
      (t.default = p),
        (p.propTypes = {
          dataId: i.default.string,
          date: i.default.oneOfType([i.default.string, i.default.number]),
          month: i.default.oneOfType([i.default.string, i.default.number]),
          onSelect: i.default.func,
          year: i.default.oneOfType([i.default.string, i.default.number])
        }),
        (p.defaultProps = { dataId: 'dateContainer' });
      var f = (t.Span = (function(e) {
        function t(e) {
          c(this, t);
          var a = u(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
          );
          return (a.handleSelectChild = a.handleSelectChild.bind(a)), a;
        }
        return (
          d(t, r.default.Component),
          n(t, [
            {
              key: 'handleSelectChild',
              value: function() {
                var e = this.props;
                (0, e.handleSelect)(e.incremday, e.userSeeMonth, e.userSeeYear);
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.tdclass,
                  a = e.incremday,
                  n = e.i,
                  i = e.dataId;
                return r.default.createElement(
                  s.Box,
                  { flexible: !0 },
                  r.default.createElement(
                    'span',
                    {
                      'data-id': i,
                      className: t,
                      key: n,
                      onClick: this.handleSelectChild
                    },
                    ' ',
                    a
                  )
                );
              }
            }
          ]),
          t
        );
      })());
      (f.propTypes = {
        dataId: i.default.string,
        handleSelect: i.default.func,
        i: i.default.number,
        incremday: i.default.number,
        tdclass: i.default.string,
        userSeeMonth: i.default.number,
        userSeeYear: i.default.number
      }),
        (f.defaultProps = { dataId: 'calendar-view' });
    },
    976: function(e, t, a) {
      'use strict';
      var n = a(38),
        r = a.n(n),
        i = a(2),
        o = a.n(i),
        s = a(11),
        l = a.n(s),
        c = a(23),
        u = a.n(c),
        d = a(12),
        m = a.n(d),
        p = a(9),
        f = a.n(p),
        h = a(10),
        g = a.n(h),
        v = a(13),
        b = a.n(v),
        y = a(14),
        _ = a.n(y),
        C = a(0),
        A = a.n(C),
        S = a(1),
        k = a.n(S),
        I = a(26),
        E = a(154),
        T = a.n(E),
        O = a(19),
        x = a.n(O),
        N = a(3),
        L = a(956),
        P = a(974),
        M = a(17);
      function w(e, t, a) {
        var n = t.departmentId || Object(M.r)(e),
          r = x()('departmentSpecificState.' + n + '.agentList.' + a, e) || [],
          i = Object(M.L)(e);
        return {
          globalAgentIds: r,
          agents: x()('module.agent', e),
          namePattern: i,
          deptId: n
        };
      }
      t.a = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 'activeAgents',
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : N.u,
          a =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        return function(i) {
          var s = (function(s) {
            function c(e) {
              f()(this, c);
              var t = b()(this, (c.__proto__ || m()(c)).call(this, e));
              return (
                (t.state = {
                  listUIState: { from: 1, isNext: !1 },
                  searchUIState: {
                    from: 1,
                    isNext: !1,
                    agentIds: [],
                    searchStr: ''
                  },
                  searchStr: '',
                  isFetching: !1
                }),
                (t._isMounted = !1),
                (t.getAgentsListSel = Object(P.a)()),
                (t.handleGetAgents = t.handleGetAgents.bind(t)),
                (t.handleGetNextAgents = t.handleGetNextAgents.bind(t)),
                (t.handleSearchAgents = t.handleSearchAgents.bind(t)),
                (t.handleAPI = t.handleAPI.bind(t)),
                (t.handleSearchAgentsArray = t.handleSearchAgentsArray.bind(t)),
                (t.handleGetAgentsList = t.handleGetAgentsList.bind(t)),
                (t.handleLocalAgentsSearch = t.handleLocalAgentsSearch.bind(t)),
                t
              );
            }
            return (
              _()(c, s),
              g()(c, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    (this._isMounted = !0), n && this.handleGetAgents();
                  }
                },
                {
                  key: 'componentDidUpdate',
                  value: function(e) {
                    this.props.deptId, e.deptId;
                  }
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    this._isMounted = !1;
                  }
                },
                {
                  key: 'handleAPI',
                  value: function() {
                    for (
                      var e = this, t = arguments.length, a = Array(t), n = 0;
                      n < t;
                      n++
                    )
                      a[n] = arguments[n];
                    var r = a.slice(1, a.length),
                      i = a[0],
                      o = this.state.isFetching,
                      s = this._isMounted;
                    return o
                      ? l.a.resolve()
                      : (s && this.setState({ isFetching: !0 }),
                        i.apply(void 0, u()(r)).then(
                          function(t) {
                            return (
                              s && e.setState({ isFetching: !1 }),
                              t && 204 !== t.responseStatus ? t : l.a.resolve()
                            );
                          },
                          function(t) {
                            throw (s && e.setState({ isFetching: !1 }), t);
                          }
                        ));
                  }
                },
                {
                  key: 'handleGetAgentsList',
                  value: function(a) {
                    var n = this,
                      r = this.props,
                      i = r.getAgentsList,
                      s = r.departmentId,
                      c = this.state,
                      u = c.searchStr,
                      d = c.listUIState,
                      m = c.searchUIState,
                      p = this._isMounted,
                      f = 'NEXT' === a,
                      h = u.replace(/\s+/g, ''),
                      g = m.searchStr,
                      v = void 0 === g ? '' : g,
                      b = u.replace(/\s+/g, '').toLowerCase(),
                      y = v.replace(/\s+/g, '').toLowerCase();
                    if (u) {
                      if ('CURRENT' !== a || b !== y) {
                        var _ = m.from,
                          C = void 0 === _ ? 1 : _,
                          A = f ? C + t : 1;
                        return (
                          this.setState({
                            searchUIState: o()({}, m, { from: A, isNext: !1 })
                          }),
                          this.handleAPI(i, e + 'Search', A, h, t, s).then(
                            function() {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {},
                                t = e.data || {},
                                a = t.result,
                                r = void 0 === a ? [] : a,
                                i = t.isNext,
                                o = t.from,
                                s = t.searchStr;
                              return (
                                n.handleSearchAgentsArray(r, o, i, s, f), e
                              );
                            },
                            function(e) {
                              throw (p &&
                                n.setState({
                                  searchUIState: o()({}, m, {
                                    from: C,
                                    isNext: !1
                                  })
                                }),
                              e);
                            }
                          )
                        );
                      }
                      return l.a.resolve();
                    }
                    var S = d.from,
                      k = void 0 === S ? 1 : S,
                      I = f ? k + t : 1;
                    return (
                      this.setState({
                        listUIState: o()({}, d, { from: I, isNext: !1 })
                      }),
                      this.handleAPI(i, e, I, u, t, s).then(
                        function() {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t = e.data || {},
                            a = t.from,
                            r = t.isNext;
                          return (
                            p &&
                              n.setState({
                                listUIState: o()({}, d, { from: a, isNext: r })
                              }),
                            e
                          );
                        },
                        function(e) {
                          throw (p &&
                            n.setState({
                              listUIState: o()({}, d, { from: k, isNext: !1 })
                            }),
                          e);
                        }
                      )
                    );
                  }
                },
                {
                  key: 'handleSearchAgentsArray',
                  value: function(e, a, n, r, i) {
                    var o = this.state.searchUIState.agentIds,
                      s = this._isMounted,
                      l = a - 1,
                      c = l + (2 * t > 200 ? 200 : 2 * t),
                      d = i
                        ? [].concat(
                            u()(o.slice(0, l)),
                            u()(e),
                            u()(o.slice(c, o.length))
                          )
                        : e;
                    s &&
                      this.setState({
                        searchUIState: {
                          agentIds: d,
                          from: a,
                          isNext: n,
                          searchStr: r
                        }
                      });
                  }
                },
                {
                  key: 'handleGetAgents',
                  value: function() {
                    return this.handleGetAgentsList('CURRENT').then(
                      function(e) {
                        return e;
                      },
                      function(e) {
                        throw e;
                      }
                    );
                  }
                },
                {
                  key: 'handleSearchAgents',
                  value: function(e) {
                    this.setState({ searchStr: e });
                  }
                },
                {
                  key: 'handleGetNextAgents',
                  value: function() {
                    return this.handleGetAgentsList('NEXT').then(
                      function(e) {
                        return e;
                      },
                      function(e) {
                        throw e;
                      }
                    );
                  }
                },
                {
                  key: 'handleLocalAgentsSearch',
                  value: function() {
                    var e = this.state.searchStr,
                      t = this.props,
                      a = t.agents;
                    return t.globalAgentIds.filter(function(t) {
                      var n = a[t],
                        r = n.firstName,
                        i = void 0 === r ? '' : r,
                        o = n.lastName,
                        s = void 0 === o ? '' : o,
                        l = n.emailId,
                        c = void 0 === l ? '' : l,
                        u = (i + s).replace(/\s+/g, '').toLowerCase(),
                        d = e.replace(/\s+/g, '').toLowerCase();
                      return -1 !== u.indexOf(d) || -1 !== c.indexOf(d);
                    });
                  }
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.state,
                      n = e.searchStr,
                      o = void 0 === n ? '' : n,
                      s = e.listUIState,
                      l = e.isFetching,
                      c = e.searchUIState,
                      u = this.props,
                      d = u.globalAgentIds,
                      m = u.namePattern,
                      p = u.agents,
                      f = o ? c : s,
                      h = f.from,
                      g = f.isNext,
                      v = f.agentIds,
                      b = f.searchStr,
                      y = void 0 === b ? '' : b,
                      _ = o.replace(/\s+/g, '').toLowerCase(),
                      C = y.replace(/\s+/g, '').toLowerCase(),
                      S = _
                        ? C === _
                          ? v
                          : a
                            ? this.handleLocalAgentsSearch()
                            : []
                        : d,
                      k = this.getAgentsListSel(
                        {},
                        {
                          agents: p,
                          agentIds: S.slice(0, h - 1 + t),
                          namePattern: m
                        }
                      );
                    return A.a.createElement(
                      i,
                      r()({}, this.props, {
                        agentIds: S,
                        agentsList: k,
                        getAgents: this.handleGetAgents,
                        getNextAgents: this.handleGetNextAgents,
                        isFetching: l,
                        isNextAgents: g,
                        onSearchAgents: this.handleSearchAgents,
                        searchString: o
                      })
                    );
                  }
                }
              ]),
              c
            );
          })(A.a.Component);
          return (
            (s.propTypes = {
              agents: k.a.object,
              departmentId: k.a.string,
              deptId: k.a.string,
              getAgentsList: k.a.func,
              globalAgentIds: k.a.array,
              namePattern: k.a.array
            }),
            T()(
              Object(I.connect)(
                function(t, a) {
                  return w(t, a, e);
                },
                { getAgentsList: L.h }
              )(s),
              i
            )
          );
        };
      };
    },
    978: function(e, t, a) {
      e.exports = {
        container: 'DateWidget-module__container',
        readOnly: 'DateWidget-module__readOnly',
        disabled: 'DateWidget-module__disabled',
        enabled: 'DateWidget-module__enabled',
        textBox: 'DateWidget-module__textBox',
        inputLine: 'DateWidget-module__inputLine',
        textBoxFocus: 'DateWidget-module__textBoxFocus'
      };
    },
    979: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n,
        r = a(980),
        i = (n = r) && n.__esModule ? n : { default: n },
        o = a(981);
      var s = {
        combinePropsValidation: function(e, t, a, n, r, i) {
          for (
            var l = t.toLowerCase(),
              c = (0, o.clone)({}, n),
              u = c.rules,
              d = c.rulesOrder,
              m = c.messages,
              p = d
                ? [].concat(
                    (function(e) {
                      if (Array.isArray(e)) {
                        for (var t = 0, a = Array(e.length); t < e.length; t++)
                          a[t] = e[t];
                        return a;
                      }
                      return Array.from(e);
                    })(d)
                  )
                : [],
              f = u || {},
              h = r,
              g = [],
              v = 0;
            v < h.length;
            v++
          ) {
            var b = h[v];
            Object.prototype.hasOwnProperty.call(e, b) &&
              (-1 === p.indexOf(b) && g.push(b),
              Object.prototype.hasOwnProperty.call(f, b) || (f[b] = e[b]));
          }
          return (
            (p = Object.prototype.hasOwnProperty.call(c, 'rulesOrder')
              ? d
              : g.concat(p)),
            (f = Object.keys(f).length
              ? s.composeRulesForValidation(l, i, f)
              : f),
            {
              validate: c.validate,
              validateOn: Object.prototype.hasOwnProperty.call(c, 'validateOn')
                ? c.validateOn
                : a,
              validationRules: f,
              validationRulesOrder: p,
              validationMessages: m
            }
          );
        },
        executeValidation: function(e, t, a, n) {
          var r = a.validation,
            o = r.validationRulesOrder || [],
            s = r.validationRules || {},
            l = r.validationMessages || {},
            c = a.onPassValidation,
            u = a.onFailValidation,
            d = null;
          if (
            (!1 !== s.required ||
              ('radio' === n && 'checkbox' === n) ||
              (d = function(e) {
                return 'onegroup' === n || 'multigroup' === n
                  ? !(e && e.length > 0)
                  : (e || '').trim().length < 1;
              }),
            null === d || !1 === d(e))
          )
            for (var m = 0, p = o.length; m < p; m++) {
              var f = o[m];
              if (s[f] && i.default.isFunction(s[f]))
                if (s[f](e, t)) {
                  var h =
                    l[f] && i.default.isFunction(l[f]) ? l[f](e, t) : l[f];
                  return void (u && u(f, h, t));
                }
            }
          c && c(e, t);
        },
        composeRulesForValidation: function(e, t, a) {
          for (
            var n = s.regexs,
              r = function(r, o) {
                var s = t[r],
                  l = a[s] || '';
                if (l && !i.default.isFunction(l))
                  if ('required' === s && !0 === l)
                    a[s] = function(t, a) {
                      return (
                        !(!a.willValidate || !a.validity.valueMissing) ||
                        ('radio' === e || 'checkbox' === e
                          ? !1 === a.checked
                          : 'onegroup' === e || 'multigroup' === e
                            ? !t || t.length < 1
                            : (t || '').replace(/\s{2,}/g, ' ').trim().length <
                              1)
                      );
                    };
                  else if (
                    'maxLength' === s &&
                    !Number.isNaN(l) &&
                    Number.isFinite(l)
                  ) {
                    var c = Number(l);
                    a[s] = function(t, a) {
                      if (a.willValidate && a.validity.tooLong) return !0;
                      var n = t || '';
                      return (
                        'multigroup' !== e && (n = t.trim()), !(n.length <= c)
                      );
                    };
                  } else if (
                    'minLength' === s &&
                    !Number.isNaN(l) &&
                    Number.isFinite(l)
                  ) {
                    var u = Number(l);
                    a[s] = function(t) {
                      var a = t || '';
                      return (
                        'multigroup' !== e && (a = t.trim()), !(a.length >= u)
                      );
                    };
                  } else if (
                    'rangeLength' === s &&
                    !0 === /^([-+\d]+)*([,]{1,1}([-+\d]+))$/.test(l)
                  ) {
                    var d = l;
                    (d = d.split(',').map(function(e) {
                      return Number(e);
                    })),
                      (a[s] = function(e) {
                        var t = (e || '').trim();
                        return !(t.length >= d[0] && t.length <= d[1]);
                      });
                  } else if ('step' === s && l) {
                    var m = Number(l),
                      p = [
                        'number',
                        'range',
                        'date',
                        'datetime',
                        'datetime-local',
                        'month',
                        'time',
                        'week'
                      ];
                    a[s] = function(t, a) {
                      if (-1 !== p.indexOf(e))
                        return !(!a.willValidate || !a.validity.stepMismatch);
                      var n = (t || '').trim();
                      return (
                        (n = Number(n)),
                        !(
                          !Number.isNaN(n) &&
                          Number.isFinite(n) &&
                          !Number.isNaN(m) &&
                          Number.isFinite(m)
                        ) || !(n % m == 0)
                      );
                    };
                  } else if ('max' === s) {
                    var f = Number(l),
                      h = [
                        'number',
                        'range',
                        'date',
                        'datetime',
                        'datetime-local',
                        'month',
                        'time',
                        'week'
                      ];
                    a[s] = function(t, a) {
                      if (-1 !== h.indexOf(e))
                        return !(!a.willValidate || !a.validity.rangeOverflow);
                      var n = (t || '').trim();
                      return (
                        (n = Number(n)),
                        !(
                          !Number.isNaN(n) &&
                          Number.isFinite(n) &&
                          !Number.isNaN(f) &&
                          Number.isFinite(f)
                        ) || !(n <= f)
                      );
                    };
                  } else if ('min' === s) {
                    var g = Number(l),
                      v = [
                        'number',
                        'range',
                        'date',
                        'datetime',
                        'datetime-local',
                        'month',
                        'time',
                        'week'
                      ];
                    a[s] = function(t, a) {
                      if (-1 !== v.indexOf(e))
                        return !(!a.willValidate || !a.validity.rangeUnderflow);
                      var n = (t || '').trim();
                      return (
                        (n = Number(n)),
                        !(
                          !Number.isNaN(n) &&
                          Number.isFinite(n) &&
                          !Number.isNaN(g) &&
                          Number.isFinite(g)
                        ) || !(n >= g)
                      );
                    };
                  } else if (
                    'range' === s &&
                    !0 === /^([-+\d]+)*([,]{1,1}([-+\d]+))$/.test(l)
                  ) {
                    var b = void 0;
                    (b = b.split(',').map(function(e) {
                      return Number(e);
                    })),
                      (a[s] = function(e) {
                        var t = (e || '').trim();
                        return (
                          (t = Number(t)),
                          !(!Number.isNaN(t) && Number.isFinite(t)) ||
                            !(t >= b[0] && t <= b[1])
                        );
                      });
                  } else
                    ('digits' !== s && 'integer' !== s && 'double' !== s) ||
                    !0 !== l
                      ? ('timezonedate' !== s &&
                          'datetimezone' !== s &&
                          'date' !== s &&
                          'datetime' !== s) ||
                        !0 !== l
                        ? 'pattern' === s && l && l.constructor === RegExp
                          ? (a[s] = function(e) {
                              var t = (e || '').trim();
                              return !new RegExp(l).test(t);
                            })
                          : ('email' !== s &&
                              'month' !== s &&
                              'time' !== s &&
                              'phone' !== s &&
                              'url' !== s &&
                              'hexcode' !== s &&
                              'cleartextpattern' !== s) ||
                            !0 !== l ||
                            (a[s] = function(e) {
                              var t = (e || '').trim();
                              return !n[s].test(t);
                            })
                        : (a[s] = function(e) {
                            var t = (e || '').trim();
                            if (!n[s].test(t)) return !0;
                            if ('datetime' === s) {
                              t = t.split('T')[0];
                            }
                            var a = (t = (t = t.replace('/', '-')).replace(
                                ':',
                                '-'
                              )).split('-'),
                              r = parseInt(a[0]),
                              i = parseInt(a[1]),
                              o = parseInt(a[2]);
                            if (
                              (1 === i || i > 2) &&
                              o >
                                [
                                  31,
                                  28,
                                  31,
                                  30,
                                  31,
                                  30,
                                  31,
                                  31,
                                  30,
                                  31,
                                  30,
                                  31
                                ][i - 1]
                            )
                              return !0;
                            if (2 === i) {
                              var l = !1;
                              if (
                                (((r % 4 || !(r % 100)) && r % 400) || (l = !0),
                                !1 === l && o >= 29)
                              )
                                return !0;
                              if (!0 === l && o > 29) return !0;
                            }
                          })
                      : (a[s] = function(e) {
                          var t = (e || '').trim();
                          if (
                            ((t = Number(t)),
                            Number.isNaN(t) || !Number.isFinite(t))
                          )
                            return !0;
                          var a = !0;
                          return (
                            'integer' === s && (a = Number.isSafeInteger(t)),
                            'double' === s &&
                              (a =
                                -Number.MAX_VALUE <= t &&
                                Number.MAX_VALUE >= t),
                            !n[s].test(t) && a
                          );
                        });
              },
              o = 0,
              l = t.length;
            o < l;
            o++
          )
            r(o);
          return a;
        },
        regexs: {
          integer: /^[-+]?[0-9]+$/,
          digits: /^[0-9]+$/,
          double: /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/,
          email: /^[\w]([\w\-.+'\/]*)@([\w\-.]*)(\.[A-z]{2,22}(\.[a-zA-Z]{2}){0,2})$/,
          phone: /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/g,
          hexcode: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
          month: /^(\d{4,6})[\/\-:](1[0-2]|0[1-9])$/,
          date: /^(\d{4,6})[\/-](1[0-2]|0[1-9])[\/\-:](0[1-9]|1[0-9]|2[0-9]|3[0-1])$/,
          time: /^([0-9]|0[0-9]|1[0-9]|2[0-3])[-\/:][0-5][0-9]$/,
          datetime: /^(\d{4,6})[\/-](1[0-2]|0[1-9])[\/\-:](0[1-9]|1[0-9]|2[0-9]|3[0-1])[T](([0-9]|0[0-9]|1[0-9]|2[0-3])[-\/:][0-5][0-9])$/,
          datetimezone: /^(\d{4,6})[\/-](1[0-2]|0[1-9])[\/\-:](0[1-9]|1[0-9]|2[0-9]|3[0-1])[T](([0-9]|0[0-9]|1[0-9]|2[0-3])[-\/:][0-5][0-9][-\/:.][0-9]{3}[Z])$/,
          url: /^(ht|f)tp(s?):\/\/[-.\w]+[.][\w]+(\/?)([A-z0-9\-.?,:'\/+=&%$#_@]*)?$/,
          cleartextpattern: /^([\t-\r !\$',-:\?-z\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]|(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))+$/
        }
      };
      t.default = s;
    },
    980: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      for (
        var n = {},
          r = 'Array Object String Date RegExp Function Boolean Number Null Undefined'.split(
            ' '
          ),
          i = function() {
            return Object.prototype.toString.call(this).slice(8, -1);
          },
          o = r.length;
        o--;

      )
        n['is' + r[o]] = (function(e) {
          return function(t) {
            return i.call(t) === e;
          };
        })(r[o]);
      t.default = n;
    },
    981: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            };
      (t.clone = function(e, t, a, n, r, i) {
        return Object.assign(e, t, a, n, r, i);
      }),
        (t.extract = function(e, t, a) {
          for (var n in ((a = a || {}), e))
            t.indexOf(n) < 0 ||
              (Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]));
          return a;
        }),
        (t.omit = function(e, t, a) {
          for (var n in ((a = a || {}), e))
            t.indexOf(n) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]));
          return a;
        }),
        (t.equals = function e(t, a) {
          if (t === a) return !0;
          if ((null == t && null != a) || (null != t && null == a)) return !1;
          if (!(t instanceof Object && a instanceof Object)) return !1;
          if (t.constructor !== a.constructor) return !1;
          for (var r in t)
            if (t.hasOwnProperty(r)) {
              if (!a.hasOwnProperty(r)) return !1;
              if (t[r] !== a[r]) {
                if ('object' !== n(t[r])) return !1;
                if (!e(t[r], a[r])) return !1;
              }
            }
          for (r in a)
            if (a.hasOwnProperty(r) && !t.hasOwnProperty(r)) return !1;
          return !0;
        });
    },
    985: function(e, t, a) {
      'use strict';
      var n = a(12),
        r = a.n(n),
        i = a(9),
        o = a.n(i),
        s = a(10),
        l = a.n(s),
        c = a(13),
        u = a.n(c),
        d = a(14),
        m = a.n(d),
        p = a(0),
        f = a.n(p),
        h = a(1),
        g = a.n(h),
        v = a(153),
        b = a(989),
        y = a.n(b),
        _ = (function(e) {
          function t() {
            return (
              o()(this, t),
              u()(this, (t.__proto__ || r()(t)).apply(this, arguments))
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function() {
                  return f.a.createElement(
                    v.a,
                    { viewBox: '0 0 298 123.3', name: 'archived' },
                    f.a.createElement('image', {
                      xlinkHref: y.a,
                      height: '100%',
                      width: '100%'
                    })
                  );
                }
              }
            ]),
            t
          );
        })(f.a.Component);
      var C = a(988),
        A = a(241),
        S = a(991),
        k = a.n(S),
        I = a(109),
        E = (function(e) {
          function t(e) {
            o()(this, t);
            var a = u()(this, (t.__proto__ || r()(t)).call(this, e));
            return (a.renderEmptyState = a.renderEmptyState.bind()), a;
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'renderEmptyState',
                value: function(e) {
                  switch (e) {
                    case 'archived':
                      return f.a.createElement(_, null);
                    case 'team':
                      return f.a.createElement(A.a, null);
                    case 'tag':
                      return f.a.createElement(C.a, null);
                    default:
                      return null;
                  }
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.text,
                    a = e.iconName,
                    n = e.hrefLinkText,
                    r = e.hrefLink,
                    i = e.isOpenNewTab;
                  return f.a.createElement(
                    'div',
                    { className: k.a.viewSearch },
                    f.a.createElement(
                      'div',
                      { className: k.a.srchImg },
                      this.renderEmptyState(a)
                    ),
                    t
                      ? f.a.createElement('div', { className: k.a.srchTxt }, t)
                      : '',
                    n && i
                      ? f.a.createElement(
                          I.a,
                          {
                            href: r,
                            target: '_blank',
                            className: k.a.srchLink
                          },
                          n
                        )
                      : n
                        ? f.a.createElement(
                            I.a,
                            { href: r, className: k.a.srchLink },
                            n
                          )
                        : null
                  );
                }
              }
            ]),
            t
          );
        })(f.a.Component);
      t.a = E;
      (E.propTypes = {
        hrefLink: g.a.string,
        hrefLinkText: g.a.string,
        iconName: g.a.oneOf(['archived', 'team', 'tag']),
        isOpenNewTab: g.a.bool,
        text: g.a.string
      }),
        (E.defaultProps = {
          iconName: 'team',
          isOpenNewTab: !1,
          hrefLink: 'javascript:void(0)'
        });
    },
    986: function(e, t, a) {
      'use strict';
      var n = a(38),
        r = a.n(n),
        i = a(11),
        o = a.n(i),
        s = a(12),
        l = a.n(s),
        c = a(9),
        u = a.n(c),
        d = a(10),
        m = a.n(d),
        p = a(13),
        f = a.n(p),
        h = a(14),
        g = a.n(h),
        v = a(0),
        b = a.n(v),
        y = a(1),
        _ = a.n(y),
        C = a(32),
        A = a(26),
        S = a(24),
        k = a(956),
        I = a(80),
        E = a.n(I),
        T = a(17),
        O = a(131),
        x = a(976),
        N = a(946),
        L = a.n(N),
        P = a(99),
        M = a.n(P),
        w = a(8),
        j = a(81),
        D = a(65),
        R = a(967),
        F = a(5),
        B = a.n(F),
        V = a(998),
        U = a.n(V),
        z = a(357),
        G = a.n(z),
        H = a(64),
        K = a.n(H),
        Y = a(30),
        W = (function(e) {
          function t(e) {
            u()(this, t);
            var a = f()(this, (t.__proto__ || l()(t)).call(this, e));
            return (a.getSelectedItemRef = a.getSelectedItemRef.bind(a)), a;
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'getSelectedItemRef',
                value: function(e) {
                  this.props.selectRef(e);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.teamsList,
                    n = t.selectedIndex,
                    r = t.closePopupOnly,
                    i = t.onChangeAssignee,
                    o = t.getAgentsByTeam,
                    s = t.selectedTeamId,
                    l = t.selectedAgentName,
                    c = t.selectedAgentImage,
                    u = t.selectedAgentId;
                  return b.a.createElement(
                    'div',
                    { className: U.a.posrel },
                    a.map(function(t, a) {
                      var d,
                        m = t.id,
                        p = t.name;
                      t.derivedAgents;
                      return b.a.createElement(
                        'div',
                        {
                          key: a,
                          onClick: function(e) {
                            r(e), i({ teamId: m, assigneeId: null });
                          },
                          className:
                            m == s
                              ? U.a.selectedItem
                              : U.a.item + ' ' + (a == n ? U.a.hoverItem : ''),
                          ref: a == n ? e.getSelectedItemRef : null
                        },
                        b.a.createElement(G.a, { name: p, size: 'xsmall' }),
                        b.a.createElement(
                          'span',
                          { className: U.a.text },
                          b.a.createElement(
                            'span',
                            { className: U.a.assignName },
                            p
                          ),
                          m == s
                            ? b.a.createElement(
                                'span',
                                { className: U.a.markedIcon },
                                b.a.createElement(Y.CustomersFontIcon, {
                                  name: 'checkmarkO',
                                  size: '17',
                                  color: 'primary',
                                  isBold: !0
                                })
                              )
                            : null
                        ),
                        b.a.createElement(
                          'div',
                          {
                            className: U.a.teamUser,
                            onClick: function(e) {
                              e.stopPropagation && e.stopPropagation(),
                                e.nativeEvent &&
                                  e.nativeEvent.stopImmediatePropagation &&
                                  e.nativeEvent.stopImmediatePropagation(),
                                o(m);
                            }
                          },
                          m == s && u
                            ? b.a.createElement(
                                K.a,
                                ((d = { name: 'Avatar', src: c }),
                                B()(d, 'name', l),
                                B()(d, 'size', 'xsmall'),
                                d)
                              )
                            : b.a.createElement(Y.TopbandFontIcon, {
                                name: 'newuser',
                                size: '13',
                                color: 'dark'
                              })
                        )
                      );
                    })
                  );
                }
              }
            ]),
            t
          );
        })(b.a.Component),
        q = W;
      W.propTypes = {
        closePopupOnly: _.a.func,
        getAgentsByTeam: _.a.func,
        onChangeAssignee: _.a.func,
        selectRef: _.a.func,
        selectedAgentId: _.a.string,
        selectedAgentImage: _.a.string,
        selectedAgentName: _.a.string,
        selectedIndex: _.a.number,
        selectedTeamId: _.a.string,
        teamsList: _.a.array
      };
      var Z = a(999),
        $ = a.n(Z),
        J = a(72),
        Q = a.n(J),
        X = a(16),
        ee = a(6),
        te = a(458),
        ae = a(232),
        ne = (function(e) {
          function t(e) {
            u()(this, t);
            var a = f()(this, (t.__proto__ || l()(t)).call(this, e));
            return (
              (a.state = { limit: 10, selectedIndex: 0 }),
              (a.onScroll = a.onScroll.bind(a)),
              (a.hasMoreAgents = a.hasMoreAgents.bind(a)),
              (a.handleKeyup = Object(O.a)(a.handleKeyup.bind(a), 100, !0)),
              (a.handleNavigation = a.handleNavigation.bind(a)),
              (a.searchAgents = a.searchAgents.bind(a)),
              (a.setScroll = a.setScroll.bind(a)),
              a
            );
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'onScroll',
                value: function() {
                  this.containerRef.scrollHeight <=
                    this.containerRef.scrollTop +
                      this.containerRef.offsetHeight &&
                    this.hasMoreAgents() &&
                    this.setState({ limit: this.state.limit + 10 });
                }
              },
              {
                key: 'hasMoreAgents',
                value: function() {
                  var e = this.props,
                    t = e.teamId;
                  return e.teams[t].derivedAgents.length > this.state.limit;
                }
              },
              {
                key: 'constructAgentsList',
                value: function(e) {
                  var t = this.props,
                    a = t.teamId,
                    n = t.teams,
                    r = t.agents,
                    i = n[a].derivedAgents;
                  (e = 'all' == e ? i.length : this.state.limit),
                    (e = i.length > e ? e : i.length);
                  for (var o = [], s = 0; s < e; s++) {
                    var l = i[s];
                    r[l] && o.push(r[l]);
                  }
                  return o;
                }
              },
              {
                key: 'handleKeyup',
                value: function(e) {
                  var t = e.keyCode;
                  38 == t || 40 == t || 13 == t
                    ? this.handleNavigation(t, e)
                    : this.searchAgents(e.target.value);
                }
              },
              {
                key: 'searchAgents',
                value: function(e) {
                  var t = this.constructAgentsList('all').filter(function(t) {
                    return (
                      -1 !=
                      Object(ee.e)(t.firstName, t.lastName)
                        .toLowerCase()
                        .indexOf(e.toLowerCase())
                    );
                  });
                  this.setState({ searchList: t, limit: 10, selectedIndex: 0 });
                }
              },
              {
                key: 'handleNavigation',
                value: function(e, t) {
                  var a = this,
                    n = this.state,
                    r = n.searchVal,
                    i = void 0 === r ? '' : r,
                    o = n.searchList,
                    s = n.selectedIndex,
                    l = i.length > 1 ? o : this.constructAgentsList();
                  switch (e) {
                    case 40:
                      this.setState(
                        {
                          selectedIndex:
                            s === l.length - 1
                              ? 0
                              : this.state.selectedIndex + 1
                        },
                        function() {
                          a.setScroll();
                        }
                      );
                      break;
                    case 38:
                      this.setState(
                        {
                          selectedIndex:
                            0 != s ? this.state.selectedIndex - 1 : 0
                        },
                        function() {
                          a.setScroll();
                        }
                      );
                      break;
                    case 13:
                      var c = this.props,
                        u = c.closePopupOnly,
                        d = c.onChangeAssignee,
                        m = c.teamId;
                      u(t), d({ assigneeId: l[s].id, teamId: m }, t);
                  }
                }
              },
              {
                key: 'setScroll',
                value: function() {
                  var e = this.state.selectedIndex,
                    t = this.containerRef,
                    a = this.selectItemRef;
                  if (a && t) {
                    var n = a.offsetTop - t.scrollTop,
                      r = a.offsetHeight,
                      i = t.offsetHeight;
                    (n <= 0 || r + n > i) &&
                      (t.scrollTop = 0 == e ? 0 : t.scrollTop + n);
                  }
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.closeTeamagents,
                    n = t.teams,
                    r = (t.agents, t.teamId),
                    i = t.selectedAgentId,
                    o = t.selectedTeamId,
                    s = t.onChangeAssignee,
                    l = t.closePopupOnly,
                    c = t.namePattern,
                    u = this.state,
                    d = u.searchVal,
                    m = void 0 === d ? '' : d,
                    p = u.searchList,
                    f = void 0 === p ? [] : p,
                    h = u.selectedIndex,
                    g = n[r],
                    v = g.name,
                    y = (g.derivedAgents,
                    m.length > 1 ? f : this.constructAgentsList());
                  return b.a.createElement(
                    X.Container,
                    { className: $.a.teamContent },
                    b.a.createElement(
                      X.Box,
                      { className: $.a.backDiv, onClick: a },
                      b.a.createElement(
                        'span',
                        { className: $.a.backIcon },
                        b.a.createElement(Y.CommonFontIcon, {
                          name: 'arrowLeft3',
                          size: '14'
                        })
                      ),
                      w.f.getI18NValue('support.crmlabel.back')
                    ),
                    b.a.createElement(
                      X.Box,
                      { className: $.a.teamHead },
                      b.a.createElement(
                        X.Container,
                        { alignBox: 'row', align: 'vertical' },
                        b.a.createElement(
                          X.Box,
                          {
                            flexible: !0,
                            className: $.a.teamName,
                            'data-title': v
                          },
                          v
                        ),
                        b.a.createElement(
                          X.Box,
                          { className: $.a.connectIcon },
                          b.a.createElement(Y.KnowledgeBaseFontIcon, {
                            name: 'kbessentialconnect',
                            size: '18'
                          })
                        ),
                        b.a.createElement(
                          'span',
                          { className: $.a.bgconnectIcon },
                          b.a.createElement(Y.KnowledgeBaseFontIcon, {
                            name: 'kbessentialconnect',
                            size: '86'
                          })
                        )
                      )
                    ),
                    b.a.createElement(
                      X.Box,
                      { className: $.a.searchDiv },
                      b.a.createElement(M.a, {
                        placeHolder: w.f.getI18NValue(
                          'support.search.support.agentinteam'
                        ),
                        onKeyUp: this.handleKeyup,
                        value: m,
                        onChange: function(t) {
                          e.setState({ searchVal: t });
                        }
                      })
                    ),
                    b.a.createElement(
                      X.Box,
                      {
                        flexible: !0,
                        onScroll: this.onScroll,
                        scroll: 'vertical',
                        eleRef: function(t) {
                          e.containerRef = t;
                        }
                      },
                      y.length
                        ? b.a.createElement(R.a, {
                            selectedTeamId: r,
                            agentsList: y,
                            selectedAgentId: r == o ? i : null,
                            closePopupOnly: l,
                            onChangeAssignee: s,
                            selectedIndex: h,
                            selectRef: function(t) {
                              e.selectItemRef = t;
                            },
                            page: 'ticketDv',
                            addFollower: function() {},
                            namePattern: c
                          })
                        : m.length
                          ? b.a.createElement(ae.a, null)
                          : b.a.createElement(te.a, null)
                    )
                  );
                }
              }
            ]),
            t
          );
        })(b.a.Component),
        re = ne;
      ne.propTypes = {
        agents: _.a.object,
        closePopupOnly: _.a.func,
        closeTeamagents: _.a.func,
        namePattern: _.a.array,
        onChangeAssignee: _.a.func,
        selectedAgentId: _.a.bool,
        selectedTeamId: _.a.bool,
        teamId: _.a.string,
        teams: _.a.object
      };
      var ie = a(985),
        oe = (function(e) {
          function t(e) {
            u()(this, t);
            var a = f()(this, (t.__proto__ || l()(t)).call(this, e));
            return (a.unAssign = a.unAssign.bind(a)), a;
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'unAssign',
                value: function(e) {
                  var t = this.props,
                    a = t.onChangeAssignee,
                    n = t.closePopupOnly;
                  a({ assigneeId: null, teamId: null }), n(e);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.assigneeId,
                    a = e.isPopupOpen,
                    n = e.isPopupReady,
                    r = e.agentName,
                    i = e.onChangeAssignee,
                    o = e.closePopupOnly,
                    s = e.photoURL,
                    l = e.teamId,
                    c = e.page,
                    u = e.addFollower,
                    d = e.defaultTab,
                    m = (e.noMoreData, e.agentsList),
                    p = e.teamsList,
                    f = e.searchStr,
                    h = e.selectedIndex,
                    g = e.changeDefaultTab,
                    v = e.keyUp,
                    y = e.setInputRef,
                    _ = e.searchAgents,
                    C = e.searchTeams,
                    A = e.contentRef,
                    S = e.setSelectRef,
                    k = e.position,
                    I = e.getAgentsByTeam,
                    E = e.openTeamId,
                    T = e.teamsObject,
                    O = e.agentsObject,
                    x = e.closeTeamagents,
                    N = e.getContainerRef,
                    P = e.needArrow,
                    F = void 0 === P || P,
                    B = e.boxSize,
                    V = void 0 === B ? 'mlarge' : B,
                    U = e.left,
                    z = void 0 === U ? null : U,
                    G = e.needTeam,
                    H = void 0 === G || G,
                    K = e.needUnAssign,
                    W = void 0 === K || K,
                    Z = e.removeClose,
                    $ = e.namePattern,
                    J = e.isAgentFetching,
                    X = e.isTeamsFetching,
                    ee = e.getNextAgents,
                    ne = e.isNextAgents,
                    oe = H && !E;
                  return a
                    ? b.a.createElement(
                        Q.a,
                        {
                          boxPosition: k,
                          getRef: N,
                          isActive: n,
                          isAnimate: !0,
                          isArrow: F,
                          size: V,
                          left: z,
                          portalId: 'portal1'
                        },
                        b.a.createElement(
                          'div',
                          { onClick: Z },
                          b.a.createElement(
                            j.TabWrapper,
                            {
                              defaultTab: d,
                              needTabBorder: !0,
                              onSelect: g,
                              type: 'delta'
                            },
                            b.a.createElement(
                              j.Tabs,
                              {
                                className: oe ? '' : L.a.none,
                                isResponsive: !1
                              },
                              b.a.createElement(j.Tab, {
                                id: 'Agent',
                                className:
                                  'Agent' == d
                                    ? L.a.agentTxtActive
                                    : L.a.agentTxt,
                                text: w.f.getI18NValue('support.survey.report'),
                                dataId: 'assignPopupAgentTab'
                              }),
                              b.a.createElement(j.Tab, {
                                id: 'Teams',
                                className:
                                  'Teams' == d
                                    ? L.a.agentTxtActive
                                    : L.a.agentTxt,
                                text: w.f.getI18NValue(
                                  'support.setup.label.teams'
                                ),
                                dataId: 'assignPopupTeamsTab'
                              })
                            ),
                            b.a.createElement(
                              j.TabContentWrapper,
                              {
                                className: E
                                  ? L.a.teamAgentLayout
                                  : L.a.assignLayout
                              },
                              b.a.createElement(
                                j.TabContent,
                                { id: 'Agent' },
                                b.a.createElement(
                                  D.Card,
                                  {
                                    fetchData: ee,
                                    noMoreData: !ne,
                                    noNeedUpScroll: !0
                                  },
                                  m.length > 5 || '' != f
                                    ? b.a.createElement(
                                        D.CardHeader,
                                        { className: L.a.agentSearch },
                                        b.a.createElement(M.a, {
                                          inputRef: y,
                                          onChange: _,
                                          onKeyUp: v,
                                          placeHolder: w.f.getI18NValue(
                                            'support.search.support.users'
                                          ),
                                          value: f,
                                          autofocus: !0
                                        })
                                      )
                                    : null,
                                  b.a.createElement(
                                    D.CardContent,
                                    {
                                      eleRef: A,
                                      className: L.a.scrollContainer
                                    },
                                    m.length
                                      ? b.a.createElement(R.a, {
                                          addFollower: u,
                                          agentsList: m,
                                          closePopupOnly: o,
                                          onChangeAssignee: i,
                                          page: c,
                                          selectedAgentId: !l && t,
                                          selectedIndex: h,
                                          selectRef: S,
                                          namePattern: $
                                        })
                                      : J
                                        ? b.a.createElement(te.a, null)
                                        : b.a.createElement(
                                            'div',
                                            { className: L.a.empty },
                                            b.a.createElement(ae.a, {
                                              text: w.f.getI18NValue(
                                                'support.no.matches.found'
                                              )
                                            })
                                          )
                                  ),
                                  b.a.createElement(
                                    D.CardFooter,
                                    null,
                                    W
                                      ? b.a.createElement(
                                          'div',
                                          {
                                            className: L.a.unAssign,
                                            onClick: this.unAssign
                                          },
                                          b.a.createElement(
                                            'span',
                                            { className: L.a.unAssignIcn },
                                            b.a.createElement(
                                              Y.TicketsFontIcon,
                                              { name: 'addAgent', size: '13' }
                                            )
                                          ),
                                          b.a.createElement(
                                            'span',
                                            { className: L.a.unAsgnTxt },
                                            w.f.getI18NValue(
                                              'support.label.markas.unassigned'
                                            )
                                          )
                                        )
                                      : null
                                  )
                                )
                              ),
                              b.a.createElement(
                                j.TabContent,
                                { id: 'Teams' },
                                b.a.createElement(
                                  D.Card,
                                  null,
                                  (p.length > 5 || '' != f) && !E
                                    ? b.a.createElement(
                                        D.CardHeader,
                                        { className: L.a.agentSearch },
                                        b.a.createElement(M.a, {
                                          inputRef: y,
                                          onChange: C,
                                          onKeyUp: v,
                                          placeHolder: w.f.getI18NValue(
                                            'support.search.support.team'
                                          ),
                                          value: f,
                                          autofocus: !0
                                        })
                                      )
                                    : null,
                                  b.a.createElement(
                                    D.CardContent,
                                    {
                                      eleRef: A,
                                      className: L.a.scrollContainer
                                    },
                                    E
                                      ? b.a.createElement(re, {
                                          agents: O,
                                          closePopupOnly: o,
                                          closeTeamagents: x,
                                          onChangeAssignee: i,
                                          selectedAgentId: t,
                                          selectedTeamId: l,
                                          teamId: E,
                                          teams: T,
                                          namePattern: $
                                        })
                                      : p.length
                                        ? b.a.createElement(q, {
                                            closePopupOnly: o,
                                            getAgentsByTeam: I,
                                            onChangeAssignee: i,
                                            selectedAgentId: t,
                                            selectedAgentImage: s,
                                            selectedAgentName: r,
                                            selectedIndex: h,
                                            selectedTeamId: l,
                                            teamId: E,
                                            teams: T,
                                            selectRef: S,
                                            teamsList: p
                                          })
                                        : X
                                          ? b.a.createElement(te.a, null)
                                          : '' != f
                                            ? b.a.createElement(
                                                'div',
                                                { className: L.a.empty },
                                                b.a.createElement(ae.a, {
                                                  iconName: 'team',
                                                  text: w.f.getI18NValue(
                                                    'support.no.matches.found'
                                                  )
                                                })
                                              )
                                            : b.a.createElement(
                                                'div',
                                                { className: L.a.empty },
                                                b.a.createElement(ie.a, {
                                                  text: w.f.getI18NValue(
                                                    'support.teams.notadded'
                                                  ),
                                                  hrefLinkText: w.f.getI18NValue(
                                                    'support.teams.addnew'
                                                  ),
                                                  iconName: 'team'
                                                })
                                              )
                                  ),
                                  W && !E
                                    ? b.a.createElement(
                                        D.CardFooter,
                                        null,
                                        b.a.createElement(
                                          'div',
                                          {
                                            className: L.a.unAssign,
                                            onClick: this.unAssign
                                          },
                                          b.a.createElement(
                                            'span',
                                            { className: L.a.unAssignIcn },
                                            b.a.createElement(
                                              Y.TicketsFontIcon,
                                              { name: 'addAgent', size: '13' }
                                            )
                                          ),
                                          b.a.createElement(
                                            'span',
                                            { className: L.a.unAsgnTxt },
                                            w.f.getI18NValue(
                                              'support.label.markas.unassigned'
                                            )
                                          )
                                        )
                                      )
                                    : null
                                )
                              )
                            )
                          )
                        )
                      )
                    : null;
                }
              }
            ]),
            t
          );
        })(v.Component),
        se = oe;
      oe.propTypes = {
        addFollower: _.a.array,
        agentName: _.a.string,
        agentsList: _.a.array,
        agentsObject: _.a.object,
        assigneeId: _.a.string,
        boxSize: _.a.string,
        changeDefaultTab: _.a.func,
        closePopupOnly: _.a.func,
        closeTeamagents: _.a.func,
        contentRef: _.a.func,
        defaultTab: _.a.string,
        getAgentsByTeam: _.a.func,
        getContainerRef: _.a.func,
        getNextAgents: _.a.func,
        isNextAgents: _.a.bool,
        isPopupOpen: _.a.bool,
        isPopupReady: _.a.bool,
        keyUp: _.a.func,
        left: _.a.string,
        namePattern: _.a.array,
        needArrow: _.a.bool,
        needTeam: _.a.bool,
        needUnAssign: _.a.bool,
        noMoreData: _.a.bool,
        onChangeAssignee: _.a.func,
        onSearchAgents: _.a.func,
        openTeamId: _.a.string,
        page: _.a.string,
        photoURL: _.a.string,
        position: _.a.string,
        removeClose: _.a.func,
        searchAgents: _.a.func,
        searchStr: _.a.string,
        searchTeams: _.a.func,
        selectedIndex: _.a.number,
        setInputRef: _.a.func,
        setSelectRef: _.a.func,
        teamId: _.a.string,
        teamsList: _.a.array,
        teamsObject: _.a.object
      };
      var le,
        ce = a(1e3),
        ue = a.n(ce),
        de = a(152),
        me = a(948),
        pe = (function(e) {
          function t(e) {
            u()(this, t);
            var a = f()(this, (t.__proto__ || l()(t)).call(this, e));
            return (a.onClick = a.onClick.bind(a)), a;
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'onClick',
                value: function(e) {
                  var t = this.props,
                    a = t.isReadOnly,
                    n = void 0 !== a && a,
                    r = t.onClick;
                  !(t.disableClick || n) && r(e);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.agentName,
                    a = e.teamName,
                    n = e.photoURL,
                    r = e.isTeam,
                    i = e.isUnassigned,
                    o = e.assigneeId,
                    s = e.type,
                    l = e.isIconOnly,
                    c = e.haveChangePer,
                    u = e.size,
                    d = e.getRef,
                    m = e.dataId,
                    p = 'small' == u ? '10' : '18',
                    f = 'small' == u ? 'xsmall' : 'xmedium';
                  return b.a.createElement(
                    'div',
                    {
                      className: ue.a.assign + ' ' + (c && !l && ue.a.pointer),
                      ref: d
                    },
                    b.a.createElement(
                      X.Container,
                      {
                        className: ue.a.agent,
                        onClick: this.onClick,
                        align: 'vertical',
                        alignBox: 'row',
                        isCover: !1,
                        dataId: m
                      },
                      b.a.createElement(
                        X.Box,
                        null,
                        r
                          ? b.a.createElement(G.a, { name: a, size: f, src: n })
                          : i
                            ? b.a.createElement(de.a, {
                                iconClass: 'mtminus2',
                                iconSize: p,
                                name: 'addAgent',
                                size: f
                              })
                            : b.a.createElement(K.a, {
                                name: t,
                                size: f,
                                src: n
                              })
                      ),
                      l
                        ? null
                        : b.a.createElement(
                            X.Box,
                            { flexible: !0, className: ue.a.agentname },
                            r
                              ? o
                                ? b.a.createElement(
                                    'div',
                                    { 'data-id': 'TeamWithAgent' },
                                    'type1' == s &&
                                      b.a.createElement(
                                        'span',
                                        {
                                          className: ue.a.name,
                                          'data-title': t
                                        },
                                        t
                                      ),
                                    b.a.createElement(
                                      'span',
                                      { className: ue.a.arrow },
                                      b.a.createElement(Y.TopbandFontIcon, {
                                        color: 'dark',
                                        name: 'down1',
                                        size: '8'
                                      })
                                    ),
                                    b.a.createElement(
                                      'div',
                                      { className: ue.a.teamName },
                                      b.a.createElement(
                                        'span',
                                        { className: ue.a.spnBrckt },
                                        '('
                                      ),
                                      b.a.createElement(
                                        'span',
                                        { className: ue.a.groupShareTxt },
                                        b.a.createElement('span', {
                                          className: ue.a.circle
                                        }),
                                        b.a.createElement('span', {
                                          className: ue.a.dot1
                                        }),
                                        b.a.createElement('span', {
                                          className: ue.a.dot2
                                        }),
                                        b.a.createElement('span', {
                                          className: ue.a.dot3
                                        })
                                      ),
                                      b.a.createElement(
                                        'span',
                                        { className: ue.a.lftPanTeam },
                                        a
                                      ),
                                      b.a.createElement(
                                        'span',
                                        { className: ue.a.spnBrckt },
                                        ')'
                                      )
                                    )
                                  )
                                : b.a.createElement(
                                    'span',
                                    {
                                      className: ue.a.name,
                                      'data-id': 'TeamOnly',
                                      'data-title': a
                                    },
                                    a
                                  )
                              : 'type1' == s
                                ? b.a.createElement(
                                    X.Container,
                                    { alignBox: 'row', isCover: !1 },
                                    b.a.createElement(
                                      'span',
                                      {
                                        className: ue.a.name,
                                        'data-title':
                                          t ||
                                          w.f.getI18NValue(
                                            'support.unassigned'
                                          ),
                                        'data-id': 'ownerBtnContainer'
                                      },
                                      t ||
                                        w.f.getI18NValue('support.unassigned')
                                    ),
                                    c
                                      ? b.a.createElement(
                                          'span',
                                          { className: ue.a.arrow },
                                          b.a.createElement(Y.TopbandFontIcon, {
                                            color: 'dark',
                                            name: 'down1',
                                            size: '8'
                                          })
                                        )
                                      : null
                                  )
                                : null
                          )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(b.a.Component);
      (pe.defaultProps = {
        isTeam: !1,
        haveChangePer: !0,
        isIconOnly: !1,
        type: 'type1',
        size: 'medium'
      }),
        (pe.propTypes = ((le = {
          agentName: _.a.string,
          assigneeId: _.a.string,
          disableClick: _.a.bool,
          getRef: _.a.func
        }),
        B()(le, 'getRef', _.a.func),
        B()(le, 'haveChangePer', _.a.bool),
        B()(le, 'isIconOnly', _.a.bool),
        B()(le, 'isReadOnly', _.a.bool),
        B()(le, 'isTeam', _.a.bool),
        B()(le, 'isUnassigned', _.a.bool),
        B()(le, 'name', _.a.string),
        B()(le, 'onClick', _.a.func),
        B()(le, 'photoURL', _.a.string),
        B()(le, 'size', _.a.oneOf(['small', 'medium'])),
        B()(le, 'teamName', _.a.string),
        B()(le, 'type', _.a.string),
        le));
      var fe = Object(me.licensePermissionCheckHOC)({
          component: { license: '*', permission: '*' },
          props: {
            disableClick: function(e) {
              var t = e.module,
                a = void 0 === t ? 'tickets' : t;
              return {
                permission:
                  a +
                  '_changeOwner' +
                  (e.isUnassigned ? '||' + a + '_unassignedChangeOwner' : ''),
                obj: !1,
                falseObj: !0
              };
            }
          }
        })(pe),
        he = function(e) {
          var t = e.features,
            a = void 0 === t ? [] : t,
            n = e.module,
            r = void 0 === n ? 'tickets' : n;
          return b.a.createElement(
            me.RestrictionValidator,
            { features: a, module: r, action: 'assign' },
            b.a.createElement(fe, e)
          );
        };
      he.propTypes = { features: _.a.array, module: _.a.string };
      var ge = he,
        ve = (function(e) {
          function t(e) {
            return (
              u()(this, t), f()(this, (t.__proto__ || l()(t)).call(this, e))
            );
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.assigneeId,
                    a = e.teamId,
                    n = e.isLocked,
                    i = e.removeClose,
                    o = e.agentName,
                    s = e.teamName,
                    l = e.getTargetRef,
                    c = e.photoURL,
                    u = e.haveChangeOwnerPermission,
                    d = e.haveUnassignedChangeOwnerPermission,
                    m = e.onClick,
                    p = !t && !a,
                    f = !n && u;
                  return (
                    p && (f = !n && (!!u || d)),
                    b.a.createElement(
                      'div',
                      { className: L.a.agentCont, onClick: i },
                      b.a.createElement(ge, {
                        agentName: o,
                        assigneeId: t,
                        teamName: s,
                        getRef: l,
                        haveChangePer: f,
                        isUnassigned: p,
                        onClick: f ? m : null,
                        size: 'small',
                        photoURL: c,
                        isTeam: a
                      }),
                      b.a.createElement(
                        se,
                        r()({}, this.props, { needUnAssign: !p })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(v.Component),
        be = ve;
      ve.propTypes = {
        agentName: _.a.string,
        assigneeId: _.a.string,
        getTargetRef: _.a.func,
        haveChangeOwnerPermission: _.a.bool,
        haveUnassignedChangeOwnerPermission: _.a.bool,
        isFromBLuePrint: _.a.bool,
        isLocked: _.a.bool,
        isPopupOpen: _.a.bool,
        onClick: _.a.func,
        photoURL: _.a.string,
        removeClose: _.a.func,
        teamId: _.a.string,
        teamName: _.a.string
      };
      var ye = (function(e) {
          function t(e) {
            return (
              u()(this, t), f()(this, (t.__proto__ || l()(t)).call(this, e))
            );
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.isPopupOpen,
                    a = e.haveAddFollowersPermission,
                    n = e.onClick,
                    i = e.getTargetRef,
                    o = e.removeClose;
                  return b.a.createElement(
                    'div',
                    { className: L.a.agentCont, onClick: o },
                    b.a.createElement(
                      'div',
                      {
                        className:
                          L.a.followerCont +
                          ' ' +
                          (t ? L.a.focused : '') +
                          ' ' +
                          (a ? '' : L.a.notAllow),
                        onClick: a && n,
                        ref: i
                      },
                      b.a.createElement(
                        X.Box,
                        { className: L.a.followText, flexible: !0 },
                        w.f.getI18NValue('support.add.followers')
                      ),
                      b.a.createElement(
                        'span',
                        { className: L.a.dropIcon },
                        b.a.createElement(Y.TopbandFontIcon, {
                          name: 'blockDownArrow'
                        })
                      )
                    ),
                    b.a.createElement(
                      se,
                      r()({}, this.props, {
                        needArrow: !1,
                        needTeam: !1,
                        needUnAssign: !1
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(v.Component),
        _e = ye;
      ye.propTypes = {
        getTargetRef: _.a.func,
        haveAddFollowersPermission: _.a.bool,
        isPopupOpen: _.a.bool,
        onClick: _.a.func,
        removeClose: _.a.func
      };
      var Ce = (function(e) {
          function t(e) {
            return (
              u()(this, t), f()(this, (t.__proto__ || l()(t)).call(this, e))
            );
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.teamId,
                    a = e.assigneeId,
                    n = e.agentName,
                    i = e.photoURL,
                    o = e.onClick,
                    s = e.getTargetRef,
                    l = e.removeClose,
                    c = e.avatarSize,
                    u = e.teamName,
                    d = e.features,
                    m = !a && !t;
                  return b.a.createElement(
                    'div',
                    { className: L.a.agentCont, onClick: l },
                    b.a.createElement(ge, {
                      agentName: n,
                      getRef: s,
                      teamName: u,
                      isTeam: t,
                      photoURL: i,
                      isIconOnly: !0,
                      isUnassigned: m,
                      onClick: o,
                      size: c,
                      features: d,
                      dataId: m ? 'addAgent' : 'ticketAssignPopup'
                    }),
                    b.a.createElement(
                      se,
                      r()({}, this.props, { needUnAssign: !m })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(v.Component),
        Ae = Ce;
      Ce.propTypes = {
        agentName: _.a.string,
        assigneeId: _.a.string,
        avatarSize: _.a.string,
        features: _.a.array,
        getTargetRef: _.a.func,
        onClick: _.a.func,
        photoURL: _.a.string,
        removeClose: _.a.func,
        teamId: _.a.string,
        teamName: _.a.string
      };
      var Se = a(950),
        ke = (function(e) {
          function t() {
            return (
              u()(this, t),
              f()(this, (t.__proto__ || l()(t)).apply(this, arguments))
            );
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.onClick,
                    a = e.getTargetRef,
                    n = e.removeClose,
                    r = e.dataId;
                  e.massActionType;
                  return b.a.createElement(
                    X.Box,
                    { className: L.a.agentCont, shrink: !0, onClick: n },
                    b.a.createElement(
                      X.Container,
                      { onClick: t, eleRef: a },
                      b.a.createElement(Se.a, {
                        icon: 'newuser',
                        text: w.f.getI18NValue('support.sla.choose.assignto'),
                        iconSize: '14',
                        type: 'primary',
                        dataId: r
                      })
                    ),
                    b.a.createElement(se, this.props)
                  );
                }
              }
            ]),
            t
          );
        })(v.Component),
        Ie = ke;
      ke.propTypes = {
        dataId: _.a.string,
        getTargetRef: _.a.func,
        massActionType: _.a.strin,
        onClick: _.a.func,
        removeClose: _.a.func
      };
      var Ee = (function(e) {
          function t(e) {
            return (
              u()(this, t), f()(this, (t.__proto__ || l()(t)).call(this, e))
            );
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.teamId,
                    a = e.assigneeId,
                    n = e.agentName,
                    i = e.photoURL,
                    o = e.onClick,
                    s = e.getTargetRef,
                    l = e.removeClose,
                    c = (e.avatarSize, e.teamName),
                    u = !a && !t;
                  return b.a.createElement(
                    'div',
                    { className: L.a.agentCont, onClick: l },
                    b.a.createElement(ge, {
                      agentName: n,
                      teamName: c,
                      isTeam: t,
                      getRef: s,
                      image: i,
                      isIconOnly: !0,
                      isUnassigned: u,
                      onClick: o,
                      size: 'small'
                    }),
                    b.a.createElement(
                      se,
                      r()({}, this.props, { needUnAssign: !u })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(v.Component),
        Te = Ee;
      Ee.propTypes = {
        agentName: _.a.string,
        assigneeId: _.a.string,
        avatarSize: _.a.string,
        getTargetRef: _.a.func,
        onClick: _.a.func,
        photoURL: _.a.string,
        removeClose: _.a.func,
        teamId: _.a.string,
        teamName: _.a.string
      };
      var Oe = (function(e) {
          function t() {
            return (
              u()(this, t),
              f()(this, (t.__proto__ || l()(t)).apply(this, arguments))
            );
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.onClick,
                    a = e.getTargetRef,
                    n = e.removeClose;
                  return b.a.createElement(
                    'div',
                    { className: L.a.agentCont, onClick: n },
                    b.a.createElement(
                      'span',
                      { className: L.a.mactionTxt, onClick: t, ref: a },
                      b.a.createElement(Se.a, {
                        icon: 'newuser',
                        text: b.a.createElement(w.c, {
                          i18NKey: 'support.sla.choose.assignto'
                        }),
                        iconSize: '14',
                        type: 'secondary'
                      })
                    ),
                    b.a.createElement(se, this.props)
                  );
                }
              }
            ]),
            t
          );
        })(v.Component),
        xe = Oe;
      Oe.propTypes = {
        getTargetRef: _.a.func,
        onClick: _.a.func,
        removeClose: _.a.func
      };
      var Ne = (function(e) {
          function t(e) {
            return (
              u()(this, t), f()(this, (t.__proto__ || l()(t)).call(this, e))
            );
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.teamId,
                    a = e.assigneeId,
                    n = e.agentName,
                    i = e.photoURL,
                    o = e.onClick,
                    s = e.getTargetRef,
                    l = e.removeClose,
                    c = (e.avatarSize, e.teamName),
                    u = !a && !t;
                  return b.a.createElement(
                    'div',
                    { className: L.a.agentCont, onClick: l },
                    b.a.createElement(ge, {
                      agentName: n,
                      teamName: c,
                      isTeam: t,
                      getRef: s,
                      image: i,
                      isIconOnly: !0,
                      isUnassigned: u,
                      onClick: o,
                      size: 'small'
                    }),
                    b.a.createElement(
                      se,
                      r()({}, this.props, { needUnAssign: !u })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(v.Component),
        Le = Ne;
      Ne.propTypes = {
        agentName: _.a.string,
        assigneeId: _.a.string,
        avatarSize: _.a.string,
        getTargetRef: _.a.func,
        onClick: _.a.func,
        photoURL: _.a.string,
        removeClose: _.a.func,
        teamId: _.a.string,
        teamName: _.a.string
      };
      var Pe = (function(e) {
          function t() {
            return (
              u()(this, t),
              f()(this, (t.__proto__ || l()(t)).apply(this, arguments))
            );
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.onClick,
                    a = e.getTargetRef,
                    n = e.removeClose,
                    i = e.isThreeLayout;
                  return b.a.createElement(
                    X.Box,
                    { className: L.a.agentCont, shrink: !0, onClick: n },
                    b.a.createElement(
                      X.Container,
                      { onClick: t, eleRef: a },
                      b.a.createElement(Se.a, {
                        icon: 'newuser',
                        text: w.f.getI18NValue('support.sla.choose.assignto'),
                        iconSize: i ? '15' : '17',
                        type: 'ticketLp'
                      })
                    ),
                    b.a.createElement(
                      se,
                      r()({}, this.props, {
                        position: 'bottomRight',
                        left: '-20'
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(v.Component),
        Me = Pe;
      Pe.propTypes = {
        getTargetRef: _.a.func,
        isThreeLayout: _.a.bool,
        onClick: _.a.func,
        removeClose: _.a.func
      };
      var we = (function(e) {
          function t() {
            return (
              u()(this, t),
              f()(this, (t.__proto__ || l()(t)).apply(this, arguments))
            );
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.isPopupOpen,
                    a = e.isFromBLuePrint,
                    n = e.assigneeId,
                    i = e.teamId,
                    o = e.agentName,
                    s = e.photoURL,
                    l = e.teamName,
                    c = e.onClick,
                    u = e.getTargetRef,
                    d = e.dataId,
                    m = e.removeClose,
                    p = !n && !i;
                  return b.a.createElement(
                    'div',
                    { className: L.a.agent, onClick: m },
                    b.a.createElement(
                      'div',
                      {
                        className:
                          L.a.followerCont +
                          '\n          ' +
                          (t ? L.a.focused : '') +
                          '\n          ' +
                          (a ? L.a.bluePrintLayar : '') +
                          '\n        ',
                        'data-id': d,
                        onClick: c,
                        ref: u
                      },
                      b.a.createElement(
                        'span',
                        { className: L.a.ownerIcon },
                        n || i
                          ? n && i
                            ? b.a.createElement(K.a, {
                                name: o,
                                size: 'medium',
                                src: s
                              })
                            : n
                              ? b.a.createElement(K.a, {
                                  name: o,
                                  size: 'medium',
                                  src: s
                                })
                              : i
                                ? b.a.createElement(G.a, {
                                    name: l,
                                    size: 'medium',
                                    src: null
                                  })
                                : ''
                          : b.a.createElement(de.a, {
                              iconSize: '13',
                              name: 'addAgent',
                              size: 'medium'
                            })
                      ),
                      b.a.createElement(
                        X.Box,
                        { flexible: !0 },
                        n && i
                          ? o
                          : n
                            ? o
                            : i
                              ? l
                              : w.f.getI18NValue('support.unassigned')
                      ),
                      b.a.createElement(
                        'span',
                        { className: L.a.dropIcon },
                        b.a.createElement(Y.TopbandFontIcon, {
                          name: 'blockDownArrow'
                        })
                      )
                    ),
                    b.a.createElement(
                      se,
                      r()({}, this.props, {
                        needArrow: !1,
                        boxSize: a ? 'default' : 'xxlarge',
                        needUnAssign: !p
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(v.Component),
        je = we;
      we.propTypes = {
        agentName: _.a.string,
        assigneeId: _.a.string,
        dataId: _.a.string,
        getTargetRef: _.a.func,
        isFromBLuePrint: _.a.bool,
        isPopupOpen: _.a.bool,
        onClick: _.a.func,
        photoURL: _.a.string,
        removeClose: _.a.func,
        teamId: _.a.string,
        teamName: _.a.string
      };
      var De = a(19),
        Re = a.n(De),
        Fe = (function(e) {
          function t(e) {
            u()(this, t);
            var a = f()(this, (t.__proto__ || l()(t)).call(this, e));
            return (
              (a.state = {
                selectedIndex: 0,
                defaultTab: 'Agent',
                teamsList: [],
                searchStr: '',
                isPopupFirstTimeOpened: !1
              }),
              (a.keyUp = a.keyUp.bind(a)),
              (a.searchAgents = a.searchAgents.bind(a)),
              (a.searchTeams = Object(O.a)(a.searchTeams.bind(a), 100, !0)),
              (a.onClick = a.onClick.bind(a)),
              (a.contentRef = a.contentRef.bind(a)),
              (a.setSelectRef = a.setSelectRef.bind(a)),
              (a.setScroll = a.setScroll.bind(a)),
              (a.setInputRef = a.setInputRef.bind(a)),
              (a.changeDefaultTab = a.changeDefaultTab.bind(a)),
              (a.getAgents = a.getAgents.bind(a)),
              (a.getTeams = a.getTeams.bind(a)),
              (a.constructTeamsList = a.constructTeamsList.bind(a)),
              (a.closeTeamagents = a.closeTeamagents.bind(a)),
              (a.getAgentsByTeam = a.getAgentsByTeam.bind(a)),
              a
            );
          }
          return (
            g()(t, e),
            m()(t, [
              {
                key: 'getAgents',
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.getAgents,
                    n = t.agentsList,
                    r = t.onSearchAgents,
                    i = this.state.isPopupFirstTimeOpened;
                  return (
                    i || this.setState({ isPopupFirstTimeOpened: !0 }),
                    i && n.length
                      ? o.a.resolve()
                      : (this.setState({ isAgentFetching: !0 }),
                        r(''),
                        a().then(function() {
                          e.setState({ isAgentFetching: !1 });
                        }))
                  );
                }
              },
              {
                key: 'searchAgents',
                value: function(e) {
                  var t = this;
                  this.setState({ searchStr: e });
                  var a = this.props,
                    n = a.onSearchAgents,
                    r = a.getAgents;
                  return (
                    n(e),
                    e
                      ? (this.setState({ isAgentFetching: !0 }),
                        r().then(function() {
                          t.setState({ isAgentFetching: !1 });
                        }))
                      : o.a.resolve()
                  );
                }
              },
              {
                key: 'searchTeams',
                value: function(e) {
                  this.setState({ searchStr: e });
                  var t = this.constructTeamsList();
                  if (e) {
                    var a = t.filter(function(t) {
                      return (
                        -1 !== t.name.toLowerCase().indexOf(e.toLowerCase())
                      );
                    });
                    a.length;
                    this.setState({ teamsList: a, selectedIndex: 0 });
                  } else this.setState({ teamsList: t, selectedIndex: 0 });
                }
              },
              {
                key: 'getTeams',
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.getTeamsList,
                    n = t.depId;
                  this.setState({ isTeamsFetching: !0 }),
                    a(n).then(function() {
                      var t = e.constructTeamsList();
                      e.setState({ teamsList: t, isTeamsFetching: !1 });
                    });
                }
              },
              {
                key: 'constructTeamsList',
                value: function() {
                  var e = this.props,
                    t = e.teamsIdList,
                    a = e.teamsObject,
                    n = [];
                  if (t && t.length)
                    for (var r = 0; r < t.length; r++) {
                      var i = t[r];
                      a[i].derivedAgents.length && n.push(a[i]);
                    }
                  return n;
                }
              },
              {
                key: 'contentRef',
                value: function(e) {
                  this.scrollContainerRef = e;
                }
              },
              {
                key: 'setSelectRef',
                value: function(e) {
                  this.selectItemRef = e;
                }
              },
              {
                key: 'setInputRef',
                value: function(e) {
                  this.inputRef = e;
                }
              },
              {
                key: 'onClick',
                value: function(e) {
                  var t = this.state.defaultTab,
                    a = this.props,
                    n = a.togglePopup,
                    r = a.isPopupOpen;
                  a.disableClick ||
                    (this.setState({ searchStr: '', selectedIndex: 0 }),
                    'Agent' === t
                      ? !r && this.getAgents()
                      : !r && this.getTeams(),
                    n(e));
                }
              },
              {
                key: 'changeDefaultTab',
                value: function(e) {
                  this.setState({ defaultTab: e }),
                    this.setState({ searchStr: '', selectedIndex: 0 }),
                    'Agent' === e ? this.getAgents() : this.getTeams();
                }
              },
              {
                key: 'keyUp',
                value: function(e) {
                  var t = this,
                    a = e.keyCode,
                    n = this.state,
                    r = n.selectedIndex,
                    i = n.defaultTab,
                    o = (n.noMoreData, n.teamsList),
                    s = (n.searchStr, this.props),
                    l = s.onChangeAssignee,
                    c = s.addFollower,
                    u = s.page,
                    d = s.closePopupOnly,
                    m = s.agentsList,
                    p = 'Agent' == i ? m : o;
                  switch (a) {
                    case 40:
                      r === p.length - 1
                        ? this.setState({ selectedIndex: 0 }, function() {
                            t.setScroll();
                          })
                        : this.setState(
                            { selectedIndex: this.state.selectedIndex + 1 },
                            function() {
                              t.setScroll();
                            }
                          );
                      break;
                    case 38:
                      0 === r
                        ? this.setState(
                            { selectedIndex: p.length - 1 },
                            function() {
                              t.setScroll();
                            }
                          )
                        : this.setState(
                            { selectedIndex: this.state.selectedIndex - 1 },
                            function() {
                              t.setScroll();
                            }
                          );
                      break;
                    case 13:
                      d(e),
                        'followers' === u
                          ? c(p[r].id, e)
                          : l(
                              {
                                assigneeId: 'Agent' == i ? p[r].id : null,
                                teamId: 'Teams' == i ? p[r].id : null
                              },
                              e
                            );
                  }
                }
              },
              {
                key: 'setScroll',
                value: function() {
                  var e = this.state.selectedIndex,
                    t = this.scrollContainerRef,
                    a = this.selectItemRef;
                  if (a && t) {
                    var n = a.offsetTop - t.scrollTop,
                      r = a.offsetHeight,
                      i = t.offsetHeight;
                    (n <= 0 || r + n > i) &&
                      (0 === e ? (t.scrollTop = 0) : (t.scrollTop += n));
                  }
                }
              },
              {
                key: 'closeTeamagents',
                value: function() {
                  this.setState({ openTeamId: null });
                }
              },
              {
                key: 'componentDidUpdate',
                value: function(e, t) {
                  var a = this;
                  this.props.isPopupOpen &&
                    setTimeout(function() {
                      a.inputRef && a.inputRef.focus();
                    }, 300),
                    e.isPopupOpen !== this.props.isPopupOpen &&
                      (this.closeTeamagents(),
                      this.props.teamId
                        ? this.setState({
                            defaultTab: 'Teams',
                            selectedIndex: 0
                          })
                        : this.setState({ defaultTab: 'Agent' })),
                    t.defaultTab !== this.state.defaultTab &&
                      this.setState({ selectedIndex: 0 });
                }
              },
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.teamId && this.setState({ defaultTab: 'Teams' });
                }
              },
              {
                key: 'getAgentsByTeam',
                value: function(e) {
                  this.props.getAgentsByTeam(e),
                    this.setState({ openTeamId: e });
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.followersList,
                    a = e.page,
                    n = e.agentsList;
                  'followers' == a &&
                    (n = n.filter(function(e) {
                      return !t.filter(function(t) {
                        return t.id === e.id;
                      }).length;
                    }));
                  var i = {
                    changeDefaultTab: this.changeDefaultTab,
                    closeTeamagents: this.closeTeamagents,
                    contentRef: this.contentRef,
                    getAgents: this.getAgents,
                    getAgentsByTeam: this.getAgentsByTeam,
                    keyUp: this.keyUp,
                    onClick: this.onClick,
                    searchAgents: this.searchAgents,
                    searchTeams: this.searchTeams,
                    setInputRef: this.setInputRef,
                    setSelectRef: this.setSelectRef,
                    agentsList: n
                  };
                  return 'ticketDv' == a
                    ? b.a.createElement(be, r()({}, this.props, this.state, i))
                    : 'followers' == a
                      ? b.a.createElement(
                          _e,
                          r()({}, this.props, this.state, i)
                        )
                      : 'listAssign' == a
                        ? b.a.createElement(
                            Ae,
                            r()({}, this.props, this.state, i)
                          )
                        : 'listPageMass' == a
                          ? b.a.createElement(
                              Ie,
                              r()({}, this.props, this.state, i)
                            )
                          : 'queueAssign' == a
                            ? b.a.createElement(
                                Te,
                                r()({}, this.props, this.state, i)
                              )
                            : 'queueMassAssign' == a
                              ? b.a.createElement(
                                  xe,
                                  r()({}, this.props, this.state, i)
                                )
                              : 'leftPanelList' == a
                                ? b.a.createElement(
                                    Le,
                                    r()({}, this.props, this.state, i)
                                  )
                                : 'leftPanelMass' == a
                                  ? b.a.createElement(
                                      Me,
                                      r()({}, this.props, this.state, i)
                                    )
                                  : 'Form' == a
                                    ? b.a.createElement(
                                        je,
                                        r()({}, this.props, this.state, i)
                                      )
                                    : null;
                }
              }
            ]),
            t
          );
        })(b.a.Component);
      Fe.propTypes = {
        addFollower: y.PropTypes.func,
        closePopupOnly: y.PropTypes.func,
        depId: y.PropTypes.string,
        disableClick: y.PropTypes.bool,
        followersList: y.PropTypes.array,
        getAgentsByTeam: y.PropTypes.func,
        getTeamsList: y.PropTypes.func,
        isPopupOpen: y.PropTypes.bool,
        onChangeAssignee: y.PropTypes.func,
        page: y.PropTypes.string,
        teamsIdList: y.PropTypes.array,
        teamsObject: y.PropTypes.object,
        togglePopup: y.PropTypes.func
      };
      t.a = Object(C.d)(
        Object(A.connect)(
          function(e, t) {
            var a = t.deptId,
              n = a || Object(T.r)(e),
              r = e.myInfo.namePattern;
            return {
              depId: n,
              teamsObject: e.module.teams,
              activeAgentsId: e.activeAgents,
              agentsObject: e.module.agent,
              teamsIdList:
                Re()('departmentSpecificState.' + n + '.teamsList', e) || [],
              namePattern: r
            };
          },
          { getTeamsList: S.u, getAgentsByTeam: k.e }
        ),
        E.a,
        Object(x.a)('activeConfirmedNonLightAgents')
      )(Fe);
    },
    988: function(e, t, a) {
      'use strict';
      var n = a(12),
        r = a.n(n),
        i = a(9),
        o = a.n(i),
        s = a(10),
        l = a.n(s),
        c = a(13),
        u = a.n(c),
        d = a(14),
        m = a.n(d),
        p = a(0),
        f = a.n(p),
        h = a(153),
        g = a(990),
        v = a.n(g),
        b = (function(e) {
          function t() {
            return (
              o()(this, t),
              u()(this, (t.__proto__ || r()(t)).apply(this, arguments))
            );
          }
          return (
            m()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function() {
                  return f.a.createElement(
                    h.a,
                    { viewBox: '0 0 298 123.5', name: 'tag' },
                    f.a.createElement('image', {
                      xlinkHref: v.a,
                      height: '100%',
                      width: '100%'
                    })
                  );
                }
              }
            ]),
            t
          );
        })(f.a.Component);
      t.a = b;
    },
    989: function(e, t) {
      e.exports =
        '//vimalesan.herokuapp.com/support/fonts/EmptyArchived.597591ca8a4e7ed77222.svg';
    },
    990: function(e, t) {
      e.exports =
        '//vimalesan.herokuapp.com/support/fonts/EmptyTag.b2752508f3c1c615c56c.svg';
    },
    991: function(e, t, a) {
      e.exports = {
        viewSearch: 'ViewDefaultEmpty-module__viewSearch',
        srchTxt: 'ViewDefaultEmpty-module__srchTxt',
        srchLink: 'ViewDefaultEmpty-module__srchLink',
        srchImg: 'ViewDefaultEmpty-module__srchImg'
      };
    },
    994: function(e, t, a) {
      'use strict';
      var n = a(333);
      a.d(t, 'd', function() {
        return n.d;
      }),
        a.d(t, 'c', function() {
          return n.c;
        }),
        a.d(t, 'b', function() {
          return n.b;
        }),
        a.d(t, 'a', function() {
          return n.a;
        });
    },
    995: function(e, t, a) {
      e.exports = {
        item: 'AgentsList-module__item',
        hoverItem: 'AgentsList-module__hoverItem',
        selectedItem: 'AgentsList-module__selectedItem AgentsList-module__item',
        text:
          'AgentsList-module__text common-module__dflex common-module__flexgrow',
        markedIcon: 'AgentsList-module__markedIcon',
        assignName: 'AgentsList-module__assignName',
        posrel: 'AgentsList-module__posrel'
      };
    },
    998: function(e, t, a) {
      e.exports = {
        posrel: 'TeamsList-module__posrel',
        item:
          'TeamsList-module__item TeamsList-module__posrel common-module__dflex common-module__alignVertical',
        hoverItem: 'TeamsList-module__hoverItem',
        selectedItem:
          'TeamsList-module__selectedItem TeamsList-module__item TeamsList-module__posrel common-module__dflex common-module__alignVertical',
        teamUser: 'TeamsList-module__teamUser common-module__flexshrink',
        assignName:
          'TeamsList-module__assignName common-module__dotted common-module__oflow common-module__ellipsis',
        text:
          'TeamsList-module__text common-module__dflex common-module__flexgrow',
        markedIcon: 'TeamsList-module__markedIcon'
      };
    },
    999: function(e, t, a) {
      e.exports = {
        backDiv: 'TeamsAgent-module__backDiv',
        backIcon: 'TeamsAgent-module__backIcon',
        teamHead:
          'TeamsAgent-module__teamHead common-module__semibold common-module__ftsmooth',
        connectIcon: 'TeamsAgent-module__connectIcon',
        bgconnectIcon: 'TeamsAgent-module__bgconnectIcon',
        searchDiv: 'TeamsAgent-module__searchDiv',
        teamName:
          'TeamsAgent-module__teamName common-module__dotted common-module__oflow common-module__ellipsis'
      };
    }
  }
]);

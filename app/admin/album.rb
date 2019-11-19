ActiveAdmin.register Album do
  permit_params :name

  filter :name
  filter :created_at

  form do |f|
    f.inputs do
      f.input :name
    end
    f.actions
  end
end